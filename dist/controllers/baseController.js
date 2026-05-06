"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    static sendSuccess(res, data, status = 200) {
        res.status(status).json(data);
    }
    static sendError(res, error, status = 500) {
        console.error("Controller error:", error.message);
        res.status(status).json({ error: error.message || "Internal server error" });
    }
}
exports.BaseController = BaseController;
