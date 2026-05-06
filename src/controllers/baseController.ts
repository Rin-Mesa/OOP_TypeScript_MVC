import { Request, Response } from "express";
 
export abstract class BaseController {
 
    protected static sendSuccess(res: Response, data: any, status: number = 200) {
        res.status(status).json(data);
    }
 
    protected static sendError(res: Response, error: any, status: number = 500) {
        console.error("Controller error:", error.message);
        res.status(status).json({ error: error.message || "Internal server error" });
    }
}