import Transactions from "../../entities/Transactions";

export default interface IWalletDTO {
  id: string;
  totalAmount: number;
  transactions: Array<Transactions>
}