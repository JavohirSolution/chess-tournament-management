import userModel from "../model/user.model.js";

class UserService {
    async getAll() {
        const users = await userModel.find({})
        return users
    }

    async create(user) {
        
    }
}

export default new UserService();
