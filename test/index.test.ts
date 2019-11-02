import { Connection, createConnection } from "typeorm";

const request = require("supertest");
const app = require("../src/index"); // the express server

describe("GET /user", () => {
    let connection: Connection;

    beforeAll(async () => {
        connection = await createConnection();
    });
    
    test("a valid string query", async (done) => {
        const response = await request(app).get("/user");
        expect(response.status).toEqual(401);
        done();
    });
});
