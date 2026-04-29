import { Request, Response } from "express";
import { User } from "../models/User";

export class UserController {

    // CREATE
    static async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;

            const newUser = new User(name, email);
            await User.create(newUser);

            res.json({ message: "User created" });
        } catch (error: any) {
            console.error("Error creating user:", error.message);
            res.status(500).json({ error: error.message || "Failed to create user" });
        }
    }

    // GET ALL
    static async getUsers(req: Request, res: Response) {
        try {
            const users = await User.getAll();
            res.json(users);
        } catch (error: any) {
            console.error("Error fetching users:", error.message);
            res.status(500).json({ error: error.message || "Error fetching users" });
        }
    }

    // GET BY ID
    static async getUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const user = await User.getById(Number(id));
            res.json(user);
        } catch (error: any) {
            console.error("Error fetching user:", error.message);
            res.status(500).json({ error: error.message || "Error fetching user" });
        }
    }

    // UPDATE
    static async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;

            await User.update(Number(id), { name, email });

            res.json({ message: "User updated" });
        } catch (error: any) {
            console.error("Error updating user:", error.message);
            res.status(500).json({ error: error.message || "Error updating user" });
        }
    }

    // DELETE
    static async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await User.delete(Number(id));

            res.json({ message: "User deleted" });
        } catch (error: any) {
            console.error("Error deleting user:", error.message);
            res.status(500).json({ error: error.message || "Error deleting user" });
        }
    }
}