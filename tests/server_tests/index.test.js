import request from 'supertest';
import app from '../../app/server/app';

describe('Test the root path', () => {
  test('It should respond to the GET method', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    })
  })
})