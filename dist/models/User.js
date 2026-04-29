"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_1 = require("../config/db");
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // CREATE
    static async create(user) {
        console.log("Creating user:", user);
        const { name, email } = user;
        const [result] = await db_1.db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
        return result;
    }
    // GET ALL
    static async getAll() {
        console.log("Fetching all users");
        const [rows] = await db_1.db.execute("SELECT * FROM users");
        return rows;
    }
    // GET ONE
    static async getById(id) {
        console.log("Fetching user by ID:", id);
        const [rows] = await db_1.db.execute("SELECT * FROM users WHERE id = ?", [id]);
        return rows[0];
    }
    // UPDATE
    static async update(id, data) {
        const { name, email } = data;
        console.log("Updating user:", { id, ...data });
        await db_1.db.execute("UPDATE users SET name = ?, email = ? WHERE id = ?", [name || null, email || null, id]);
    }
    // DELETE
    static async delete(id) {
        console.log("Deleting user by ID:", id);
        await db_1.db.execute("DELETE FROM users WHERE id = ?", [id]);
    }
}
exports.User = User;
