const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
  afterEach(() => {
    server.resetDummyData();
  })

  describe('GET /', () => {
    it('should send a 200 status code', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    })

    it('should send all of the requested data', async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual(server.dummyData);
    })
  })

  describe('POST /', () => {
    it('should send a 201 status code', async () => {
      const res = await request(server).post('/').send({ name: 'bob', fruit: 'pineapple' });
      expect(res.status).toBe(201);
    })
    
    it('should save the data', async () => {
      await request(server).post('/').send({ name: 'bob', fruit: 'pineapple' });
      expect(server.dummyData[4]).toEqual({ name: 'bob', fruit: 'pineapple' });
    })
  })
  
  describe('DELETE /', () => {
    it('should send a 200 status code', () => {

    })

    it('should remove the data', () => {
      
    })
  })
  
});