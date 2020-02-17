const app = require('./server');
const request = require('supertest');
test('check description here', async done => {
        const response = await request(app).get('/') 
        expect(response.status).toBe(404)
        done()
}); 