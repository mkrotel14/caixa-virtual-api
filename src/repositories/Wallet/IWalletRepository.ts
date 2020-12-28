import Wallet from "src/entities/Wallet";

export default interface IWalletRepository {
  get(id: string): Promise<Wallet | undefined>
}