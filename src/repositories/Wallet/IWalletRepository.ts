import Wallet from "src/entities/Wallet";

export default interface IWalletRepository {
  get(_id: string): Promise<Wallet | undefined>
}