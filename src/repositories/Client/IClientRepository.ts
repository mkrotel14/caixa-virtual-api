import Client from "../../entities/Client";
import IClientDTO from "./IClientDTO";

export default interface IClientRepository {
  add(client: IClientDTO): Promise<Client>
  auth(client: IClientDTO): Promise<string | undefined>
}