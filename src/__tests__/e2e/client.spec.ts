import faker from 'faker';
import supertest from 'supertest';
import server from '../../infra/server'
import Database from '../../infra/typeorm'

import {add} from '../../repositories/Client/fakes/FakeClientRepository'

let apptest: any

const db = new Database()

beforeAll(async () => {
  await db.connection()
  apptest = supertest(server);
})


describe("POST /client", () => {
  it("should return 200 & valid response for valid user", async done => {
    apptest
      .post(`/client`)
      .send({
        "taxId": faker.internet.userName(),
        "password": faker.internet.password()
      })
      .expect(200)
      .end((err: Error, res: Response) => {
        if (err) {
          return done(err)
        }
        expect(res.body).toHaveProperty("_id")
        done()
      })
  });
});

describe("POST /client/auth", () => {
  it("should return 200 & valid response for a valid authenticate request", async done => {
    const dummyClient = {taxId: faker.internet.userName(), password: faker.internet.password()}
    await add(dummyClient);
    apptest
      .post(`/client/auth`)
      .send({taxId: dummyClient.taxId, password: dummyClient.password})
      .expect(200)
      .end((err: Error, res: Response) => {
        if (err) return done(err)

        expect(res.body).toHaveProperty('token')
        done()
      })
  });
});

describe("POST /client", () => {
  it("should return 409 & valid response for duplicated user", async done => {
    const data = {
      "taxId": faker.internet.userName(),
      "password": faker.internet.password()
    }
    
    apptest
      .post(`/client`)
      .send(data)
      .expect(200)
      .end((err: Error, res: Response) => {
        if (err) return done(err)
        
        apptest
          .post(`/client`)
          .send(data)
          .expect(409)
          .end((err: Error, res: Response) => {
            if (err) return done(err)
            
            expect(res.body).toMatchObject({
              message: expect.stringMatching(/^duplicate key/i)
            })
            done()
          })
      })
  });
});

describe("POST /client/auth", () => {
  it("should return 404 & valid response for a non-existing user", async done => {
    apptest
      .post(`/client/auth`)
      .send({
        "taxId": faker.internet.userName(),
        "password": faker.internet.password()
      })
      .expect(404)
      .end((err: Error, res: Response) => {
        if (err) return done(err)
        expect(res.body).toMatchObject({
          message: expect.stringMatching(/^Could not find/i)
        })
        done()
      })
  });
});
// 



