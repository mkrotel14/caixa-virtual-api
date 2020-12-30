import { EntitySubscriberInterface, EventSubscriber, InsertEvent} from 'typeorm';
import Client from '../entities/Client'
import Wallet from '../entities/Wallet'

@EventSubscriber()
export class ClientSubscriber implements EntitySubscriberInterface<Client> {

  listenTo(): any {
    return Client;
  }

  async afterInsert(event: InsertEvent<Client>): Promise<any>{
    const wallet = new Wallet()
    
    wallet._id = event.entity._id
    wallet.balance = 0;

    return await event.manager.getRepository(Wallet).save(wallet)
  }
}