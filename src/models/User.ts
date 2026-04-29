import { db } from "../config/db";

export class User {
    id?: number;
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // CREATE
    static async create(user: User) {
        const { name, email } = user;
        const [result]: any = await db.execute(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );
        return result;
    }

    // GET ALL
    static async getAll() {
        const [rows] = await db.execute("SELECT * FROM users");
        return rows;
    }

    // GET BY ID
    static async getById(id: number) {
        const [rows]: any = await db.execute(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    // UPDATE
    static async update(id: number, data: Partial<User>) {
        const { name, email } = data;
        await db.execute(
            "UPDATE users SET name = ?, email = ? WHERE id = ?",
            [name || null, email || null, id]
        );
    }

    // DELETE
    static async delete(id: number) {
        await db.execute("DELETE FROM users WHERE id = ?", [id]);
    }
}