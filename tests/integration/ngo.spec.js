const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it('should create a new NGO', async () => {
    const response = await request(app).post('/ngos').send({
      name: 'Berlin Test',
      email: 'test@test.com',
      whats: '99140788811',
      city: 'Berlin City',
      uf: 'BL',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
