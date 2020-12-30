import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import Transactions from '../entities/Transactions'
import Wallet from '../entities/Wallet'

@EventSubscriber()
export class TransactionSubscriber implements EntitySubscriberInterface<Transactions> {
  // Listen to changes in Transactions Repository
  listenTo(): any {
    return Transactions;
  }

  // After each new Transaction the balance is calculated based on the category
  // of the transaction. If it is a 'INCOMING' the amount it will be added in the total balance,
  // if it is a 'OUTGOING' the amount it will be discounted from the balance.
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