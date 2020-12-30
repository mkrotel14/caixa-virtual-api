import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import Transactions from '../entities/Transactions'
import Wallet from '../entities/Wallet'

@EventSubscriber()
export class TransactionSubscriber implements EntitySubscriberInterface<Transactions> {

  listenTo(): any {
    return Transactions;
  }

  async afterInsert(event: InsertEvent<Transactions>): Promise<any> {
    const price = event.entity.amount
    const category = event.entity.category

    const walletRepository = event.manager.getRepository(Wallet)
    const wallet = await walletRepository.findOne({where: {_id: event.entity.walletId}})
    
    if (wallet) {
      switch(category) {
        case 'Incoming':
          wallet.balance += price;
          break;
        case 'Outgoing':
          wallet.balance -= price;
          break;
      }

      walletRepository.save(wallet)
    }
  }
}