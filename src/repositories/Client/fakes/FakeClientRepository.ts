import {getRepository} from 'typeorm';
import faker from 'faker';

import Util from '../../../util'
import Client from '../../../entities/Client';

type DummyUser = {_id?: string, taxId: string, password: string}
const util = new Util();

export async function add({taxId, password}: DummyUser): Promise<DummyUser> {
  const clientRepository = getRepository(Client)

  return await clientRepository.save({
    taxId,
    password: util.hashPassword(password)
  })
}
