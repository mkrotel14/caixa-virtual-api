import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

enum Category {
  INCOMING = 'Incoming',
  OUTGOING = 'Outgoing'
}

@Entity('transactions')
export default class Transactions {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  wallet: string

  @Column()
  amount: number

  @Column()
  description: string

  @Column({
    type: 'enum',
    enum: Category,
    default: Category.INCOMING
  })
  category: Category

  @Column({type: 'timestamp'})
  date: Date
}