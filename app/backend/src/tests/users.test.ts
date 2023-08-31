import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/UserModel';
import usersMocks from './mocks/users.mocks';


chai.use(chaiHttp);

const { expect } = chai;

describe('Users tests', () => {
  afterEach(function() { sinon.restore() });

  it('Testa se a função findOne retorna o status e data esperados, ao inserir login válido', async function() {
    sinon.stub(User, 'findOne').resolves(usersMocks.mockToken as any);

    const { status, body } = await chai.request(app).post('/users');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(usersMocks.mockToken);
  })
});
