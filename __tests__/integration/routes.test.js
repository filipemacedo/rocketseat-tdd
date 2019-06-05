const supertest = require('supertest');

const app = require('../../src/app');

const request = supertest(app);

describe('Test routes', () => {
  it('Test session route', async () => {
    const response = await request
      .post('/session')
      .send({
        name: "Filipe"
      });
    
    expect(response.status).not.toBe(404);
  })
})