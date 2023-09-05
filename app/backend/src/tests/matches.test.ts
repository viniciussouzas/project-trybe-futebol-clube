import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Match from '../database/models/MatchModel';
import matchesMocks from './mocks/matches.mocks';
import usersMocks from './mocks/users.mocks';


chai.use(chaiHttp);

const { expect } = chai;

describe('Matches tests', () => {
  afterEach(function() { sinon.restore() });

  it('Testa se a função findAll retorna o status e data esperados', async function() {
    sinon.stub(Match, 'findAll').resolves(matchesMocks.allMatches as any);

    const { status, body } = await chai.request(app).get('/matches');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matchesMocks.allMatches);
    expect(body.length).to.be.equal(2);
  });

  it('Testa se a função findAll com o filtro retorna o status e data esperados', async function() {
    sinon.stub(Match, 'findAll').resolves(matchesMocks.matchesInProgress as any);

    const { status, body } = await chai.request(app).get('/matches?inProgress=true');

    expect(status).to.be.equal(200);
    expect(body).to.be.deep.equal(matchesMocks.matchesInProgress);
    expect(body.length).to.be.equal(2);
  });
});
