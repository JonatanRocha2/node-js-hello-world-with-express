const request = require('supertest');
const { app, server } = require('../src/hello-world');

describe('GET /', () => {
    it('responds with text "Hello World"', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello World');
    });

    it('responds with status code 200', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
    afterAll( async() => {
        await new Promise(resolve => server.close(resolve));
    });
});
