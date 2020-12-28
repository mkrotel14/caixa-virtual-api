import { Column, Entity, OneToMany } from "typeorm";
import Transactions from "./Transactions";

@Entity('wallet')
export default class Wallet {
  @Column()
  id: string;

  @Column()
  totalAmount: number

  @OneToMany(() => Transactions, (transactions) => transactions.wallet)
  transaction: Transactions[]
}