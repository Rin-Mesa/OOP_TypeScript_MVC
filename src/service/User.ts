import { User } from "../models/User";
 
export class UserService {
 
    static async createUser(name: string, email: string) {
        const newUser = new User(name, email);
        return await User.create(newUser);
    }
 
    static async getUsers() {
        return await User.getAll();
    }
 
    static async getUser(id: number) {
        return await User.getById(id);
    }
 
    static async updateUser(id: number, name?: string, email?: string) {
        await User.update(id, { name, email });
    }
 
    static async deleteUser(id: number) {
        await User.delete(id);
    }
}