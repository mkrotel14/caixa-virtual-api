import Transactions from "src/entities/Transactions";
import ITransactionsDTO from "./ITransactionsDTO";

export default interface ITransactionsRepository {
  add(transaction: ITransactionsDTO): Promise<Transactions>
}