import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../../app';
import Team from '../../database/models/TeamModel';
import teamsMocks from '../mocks/teams.mocks';


chai.use(chaiHttp);

const { expect } = chai;

describe('Teams tests', () => {
  afterEach(function() { sinon.restore() });

  it('Testa se a função findAll retorna o status e data esperados', async function() {
    sinon.stub(Team, 'findAll').resolves(teamsMocks.teams as Team[]);

    const { status, body } = await chai.request(app).get('/teams');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teamsMocks.teams);
    expect(body.length).to.be.equal(3);
  })

  it('Testa se a função findByPk retorna o status e data esperados', async function () {
    sinon.stub(Team, 'findByPk').resolves(teamsMocks.team as Team);

    const { status, body } = await chai.request(app).get('/teams/1');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(teamsMocks.team);
  });
});
