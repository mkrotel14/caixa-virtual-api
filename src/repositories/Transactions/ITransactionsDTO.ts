import { Category } from "src/enum/Category";

export default interface ITransactionsDTO {
  _id?: string
  wallet: string;
  amount: number;
  description: string;
  category: Category;
  date: Date
}