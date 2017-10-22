import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import server from '../../../express_src/srcServer';

chai.use(chaiHttp);

describe('Users', () => {
  describe('PUT update', () => {
    it('200 status is returned', done => {
      chai.request(server)
        .post('/api/users/create')
        .send({
          email: 'jdoe@example.com',
          password: 'bacon'
        })
        .then(() => {
          chai.request(server)
            .put('/api/users/1')
            .send({
              email: 'jdoe@example.com',
              password: 'bacon'
            })
            .end((err, res) => {
              expect(res).to.have.status(200);
              done();
            });
        });
    });
  });
})
;
