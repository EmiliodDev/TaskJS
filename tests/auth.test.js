const request = require('supertest');
const app = require('../server/main');

describe('Auth endpoint', () => {
    // register user test
    describe('POST /register', () => {
        it('Should register a new user', async () => {
            const response =  await request(app)
                .post('/register')
                .send({
                    email: "test@example.com",
                    password: "123456",
                    username: "test",
                });

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('message');
        });

        it('Should respond that the user already exists', async () => {
            const response =  await request(app)
                .post('/register')
                .send({
                    email: "test@example.com",
                    password: "123456",
                    username: "test",
                });

            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty('error');
        });
    });

    // login user test
    describe('POST /login', () => {
        it('Should start session successfully', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    email: "test@example.com",
                    password: "123456",
                });

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty('token');
        });

        it('Should return an error if the credential are invalid', async () => {
            const response = await request(app)
                .post('/login')
                .send({
                    email: "test@example.com",
                    password: "incorrectPassword",
                });

            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty('error');
        });
    });
});
