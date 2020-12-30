import { EntitySubscriberInterface, EventSubscriber, InsertEvent} from 'typeorm';
import Client from '../entities/Client'
import Wallet from '../entities/Wallet'

@EventSubscriber()
export class ClientSubscriber implements EntitySubscriberInterface<Client> {
  // Listen to changes in Client Repository
  listenTo(): any {
    return Client;
  }

  // Inserting a new Client generate a new Wallet with the same _id.
  async afterInsert(event: InsertEvent<Client>): Promise<any>{
    const wallet = new Wallet()
    
    wallet._id = event.entity._id
    wallet.balance = 0;

    return await event.manager.getRepository(Wallet).save(wallet)
  }
}