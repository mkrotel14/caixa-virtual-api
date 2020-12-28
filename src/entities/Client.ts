import { Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Wallet from "./Wallet";

@Entity('client')
export default class Client {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @OneToOne(() => Wallet, (wallet) => wallet.id)
  wallet: Wallet;
}