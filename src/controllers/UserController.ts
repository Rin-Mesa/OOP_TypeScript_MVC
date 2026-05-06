import { Request, Response } from "express";
import { BaseController } from "./baseController";
import { UserService } from "../service/User";
 
export class UserController extends BaseController {
 
    // CREATE
    static async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const result = await UserService.createUser(name, email);
            UserController.sendSuccess(res, { id: result.insertId, name, email }, 201);
        } catch (error: any) {
            UserController.sendError(res, error);
        }
    }
 
    // GET ALL
    static async getUsers(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers();
            UserController.sendSuccess(res, users);
        } catch (error: any) {
            UserController.sendError(res, error);
        }
    }
 
    // GET BY ID
    static async getUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UserService.getUser(Number(id));
            if (!user) return UserController.sendError(res, { message: "User not found" }, 404);
            UserController.sendSuccess(res, user);
        } catch (error: any) {
            UserController.sendError(res, error);
        }
    }
 
    // UPDATE
    static async updateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            await UserService.updateUser(Number(id), name, email);
            UserController.sendSuccess(res, { message: "User updated" });
        } catch (error: any) {
            UserController.sendError(res, error);
        }
    }
 
    // DELETE
    static async deleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await UserService.deleteUser(Number(id));
            UserController.sendSuccess(res, { message: "User deleted" });
        } catch (error: any) {
            UserController.sendError(res, error);
        }
    }
}