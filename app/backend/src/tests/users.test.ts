import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
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
    sinon.stub(User, 'findOne').resolves(usersMocks.adminUserMock as User);
    sinon.stub(jwt, 'sign').returns(usersMocks.mockToken as any);

    const { status, body } = await chai.request(app).post('/login').send(usersMocks.adminLoginMock);

    expect(status).to.be.equal(200);
    expect(body).to.have.property('token');
    expect(body.token).to.be.deep.equal(usersMocks.mockToken)
  });

  it('Testa se a função findRole retorna o status e data esperados', async function() {
    sinon.stub(jwt, 'verify').resolves(usersMocks.adminUserMock.email as any);
    sinon.stub(User, 'findOne').resolves(usersMocks.adminUserMock as User);

    const { status, body } = await chai.request(app).get('/login/role').set('authorization', `Bearer ${usersMocks.mockToken}` );

    expect(status).to.be.equal(200);
    expect(body).to.have.property('role');
    expect(body.role).to.be.deep.equal('admin')
  });
});
