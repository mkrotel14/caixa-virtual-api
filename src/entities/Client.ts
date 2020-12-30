import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import Wallet from "./Wallet";

/**
 * CLIENT ENTITY
 * 
 * _id: UUID Client identifier;
 * taxId: Unique Client identifier (CPF/CNPJ);
 * password: Client password (to be hashed afterwards);
 * 
 */

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