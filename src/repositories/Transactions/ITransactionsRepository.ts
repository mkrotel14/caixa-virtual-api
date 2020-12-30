import Transactions from "../../entities/Transactions";
import ITransactionsDTO from "./ITransactionsDTO";

export default interface ITransactionsRepository {
  add(transaction: ITransactionsDTO): Promise<Transactions[]>
}