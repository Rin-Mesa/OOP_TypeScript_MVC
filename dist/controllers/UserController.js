"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const baseController_1 = require("./baseController");
const User_1 = require("../service/User");
class UserController extends baseController_1.BaseController {
    // CREATE
    static async createUser(req, res) {
        try {
            const { name, email } = req.body;
            const result = await User_1.UserService.createUser(name, email);
            UserController.sendSuccess(res, { id: result.insertId, name, email }, 201);
        }
        catch (error) {
            UserController.sendError(res, error);
        }
    }
    // GET ALL
    static async getUsers(req, res) {
        try {
            const users = await User_1.UserService.getUsers();
            UserController.sendSuccess(res, users);
        }
        catch (error) {
            UserController.sendError(res, error);
        }
    }
    // GET BY ID
    static async getUser(req, res) {
        try {
            const { id } = req.params;
            const user = await User_1.UserService.getUser(Number(id));
            if (!user)
                return UserController.sendError(res, { message: "User not found" }, 404);
            UserController.sendSuccess(res, user);
        }
        catch (error) {
            UserController.sendError(res, error);
        }
    }
    // UPDATE
    static async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            await User_1.UserService.updateUser(Number(id), name, email);
            UserController.sendSuccess(res, { message: "User updated" });
        }
        catch (error) {
            UserController.sendError(res, error);
        }
    }
    // DELETE
    static async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await User_1.UserService.deleteUser(Number(id));
            UserController.sendSuccess(res, { message: "User deleted" });
        }
        catch (error) {
            UserController.sendError(res, error);
        }
    }
}
exports.UserController = UserController;
