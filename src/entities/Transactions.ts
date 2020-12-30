import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Wallet from "./Wallet";

enum Category {
  INCOMING = 'Incoming',
  OUTGOING = 'Outgoing'
}

/**
 * TRANSACTION ENTITY
 * 
 * _id: UUID Transaciton identifier;
 * walletId: UUID Wallet identifier (same _id as Wallet);
 * amount: Transaciton amount (to be sent in cents);
 * category: Transaction category (Incoming/Outgoing);
 * description: Transaction description;
 * date: Transaction date
 *  
 */

@Entity('transactions')
export default class Transactions {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  walletId: string

  @Column()
  amount: number

  @Column({
    type: 'enum',
    enum: Category,
    default: Category.INCOMING
  })
  category: Category

  @Column()
  description: string

  @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  date: Date

  @ManyToOne(() => Wallet, wallet => wallet.transaction)
  @JoinColumn({name: 'walletId'})
  wallet: Wallet
}