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
        console.log("Creating user:", user);
        const { name, email } = user;
        const [result]: any = await db.execute(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [name, email]
        );
        return result;
    }

    // GET ALL
    static async getAll() {
        console.log("Fetching all users");
        const [rows] = await db.execute("SELECT * FROM users");
        return rows;
    }

    // GET ONE
    static async getById(id: number) {
        console.log("Fetching user by ID:", id);
        const [rows]: any = await db.execute(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        return rows[0];
    }

    // UPDATE
    static async update(id: number, data: Partial<User>) {
        const { name, email } = data;
        console.log("Updating user:", { id, ...data });
        await db.execute(
            "UPDATE users SET name = ?, email = ? WHERE id = ?",
            [name || null, email || null, id]
        );
    }

    // DELETE
    static async delete(id: number) {
        console.log("Deleting user by ID:", id);
        await db.execute("DELETE FROM users WHERE id = ?", [id]);
    }
}