import faker from 'faker';
import { endianness } from 'os';
import supertest from 'supertest';

import server from '../../infra/server';
import Database from '../../infra/typeorm';

import {add} from '../../repositories/Client/fakes/FakeClientRepository';

let apptest: any;

const db = new Database();

beforeAll(async () => {  
  await db.getConnection('default');
  apptest = supertest(server);
})

afterAll(async () => {
  await db.clear();
  await db.close();
})

describe("POST /transaction", () => {
  it("should return 200 & valid response for valid transaction", async done => {
    const dummyClient = {taxId: faker.internet.userName(), password: faker.internet.password()}
    await add(dummyClient);

    apptest
      .post(`/client/auth`)
      .send(dummyClient)
      .expect(200)
      .end((err: Error, res: any) => {
        if (err) return done(err)
        
        apptest
          .post(`/transactions`)
          .set('Authorization', 'Bearer ' + res.body.token)
          .send({
            amount: 1000,
            category: "Incoming",
            description: "Parcela do Produto Y"
          })
          .expect(200)
          .end((err: Error, res: Response) => {
            if (err) return done(err)

            expect(res.body).toHaveProperty("_id")
            done()
          })
      })
  });

  it("should return 400 & valid response for invalid transaction payload", async done => {
    const dummyClient = {taxId: faker.internet.userName(), password: faker.internet.password()}
    await add(dummyClient);

    apptest
      .post(`/client/auth`)
      .send(dummyClient)
      .expect(200)
      .end((err: Error, res: any) => {
        if (err) return done(err)
        
        apptest
          .post(`/transactions`)
          .set('Authorization', 'Bearer ' + res.body.token)
          .expect(400)
          .send({
            amount: 1000,
            category: "Incomin",
            description: "Parcela do Produto Y"
          })
          .end((err: Error, res: Response) => {
            if (err) return done(err)

            expect(res.body).toMatchObject({
              message: expect.stringMatching(/[Incoming, Outgoing]/i)
            })
            done()
          })
      })
  });
});