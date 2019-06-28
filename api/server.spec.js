const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
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
    it('should send a 201 status code', () => {

    })
    
    it('should save the data', () => {

    })
  })
  
  describe('DELETE /', () => {
    it('should send a 200 status code', () => {

    })

    it('should remove the data', () => {
      
    })
  })
  
});