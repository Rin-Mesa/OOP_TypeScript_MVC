"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = require("../models/User");
class UserService {
    static async createUser(name, email) {
        const newUser = new User_1.User(name, email);
        return await User_1.User.create(newUser);
    }
    static async getUsers() {
        return await User_1.User.getAll();
    }
    static async getUser(id) {
        return await User_1.User.getById(id);
    }
    static async updateUser(id, name, email) {
        await User_1.User.update(id, { name, email });
    }
    static async deleteUser(id) {
        await User_1.User.delete(id);
    }
}
exports.UserService = UserService;
