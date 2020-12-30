import Wallet from "../../entities/Wallet";

export default interface IClientDTO {
  _id?: string
  taxId: string;
  password: string;
  wallet?: Wallet
}