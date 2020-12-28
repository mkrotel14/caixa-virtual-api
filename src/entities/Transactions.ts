import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Category} from 'src/enum/Category'

@Entity('transactions')
export default class Transactions {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  wallet: string

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

  @Column({type: 'timestamp'})
  date: Date
}