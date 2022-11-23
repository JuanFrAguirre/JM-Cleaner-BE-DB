"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = require("mysql2/promise");
const pool = (0, promise_1.createPool)({
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Juanfies2?',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_P) || 3306,
    database: process.env.DB_DATABASE || 'users',
});
exports.default = pool;
