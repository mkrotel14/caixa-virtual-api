import faker from 'faker';
import supertest from 'supertest';
import { createConnections } from 'typeorm';

import server from '../../infra/server';
import Database from '../../infra/typeorm';

import {add} from '../../repositories/Client/fakes/FakeClientRepository';

let apptest: any;

const db = new Database()

beforeAll(async () => {  
  await db.connection()
  apptest = supertest(server);
})

describe("GET /wallet", () => {
  it("should return 200 & valid response for valid wallet", async done => {
    const dummyClient = {taxId: faker.internet.userName(), password: faker.internet.password()}
    await add(dummyClient);

    apptest
      .post(`/client/auth`)
      .send(dummyClient)
      .expect(200)
      .end((err: Error, res: any) => {
        if (err) return done(err)
        
        apptest
          .get(`/wallet`)
          .set('Authorization', 'Bearer ' + res.body.token)
          .expect(200)
          .end((err: Error, res: Response) => {
            if (err) return done(err)

            expect(res.body).toHaveProperty("_id")
            done()
          })
      })
  });

  it("should return 401 & valid response for unauthorized client wallet", async done => {
    apptest
      .get(`/wallet`)
      .set('Authorization', 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiJ1c2VyIiwianRpIjoiMWNlY2Q3NjktZWNlNC00NWIwLWIwNTQtMTZkZDY3NTZiOGQ0IiwiaWF0IjoxNjA5NDQzNTYwLCJleHAiOjE2MDk0NDcxNjB9.yknkN7_ZpZUSpvREh2T-Oq9JLLazPeFRUFSwDndJ2kw')
      .expect(401)
      .end((err: Error, res: Response) => {
        if (err) return done(err)

        expect(res.body).toMatchObject({
          message: expect.stringMatching(/^invalid signature/i)
        })
        done()
      })
  })
});