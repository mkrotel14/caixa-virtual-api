import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import Wallet from "./Wallet";

@Entity('client')
@Unique(["taxId"])
export default class Client {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  taxId: string; 

  @Column()
  password: string

  @OneToOne(() => Wallet, wallet => wallet.client, {
    cascade: true,
    onDelete: "CASCADE",
    primary: true
  })
  wallet: Wallet
}