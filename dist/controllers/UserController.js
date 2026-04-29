"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    // CREATE
    static async createUser(req, res) {
        try {
            const { name, email } = req.body; // destructuring
            const newUser = new User_1.User(name, email);
            await User_1.User.create(newUser);
            res.json({ message: "User created" });
        }
        catch (error) {
            console.error("Error creating user:", error.message);
            res.status(500).json({ error: error.message || "Failed to create user" });
        }
    }
    // GET ALL
    static async getUsers(req, res) {
        try {
            const users = await User_1.User.getAll();
            res.json(users);
        }
        catch (error) {
            console.error("Error fetching users:", error.message);
            res.status(500).json({ error: error.message || "Error fetching users" });
        }
    }
    // GET ONE
    static async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User_1.User.getById(Number(id));
            res.json(user);
        }
        catch (error) {
            console.error("Error fetching user:", error.message);
            res.status(500).json({ error: error.message || "Error fetching user" });
        }
    }
    // UPDATE
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            await User_1.User.update(Number(id), { name, email });
            res.json({ message: "User updated" });
        }
        catch (error) {
            console.error("Error updating user:", error.message);
            res.status(500).json({ error: error.message || "Error updating user" });
        }
    }
    // DELETE
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await User_1.User.delete(Number(id));
            res.json({ message: "User deleted" });
        }
        catch (error) {
            console.error("Error deleting user:", error.message);
            res.status(500).json({ error: error.message || "Error deleting user" });
        }
    }
}
exports.UserController = UserController;
