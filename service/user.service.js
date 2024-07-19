import userModel from "../model/user.model.js";
import tokenService from "./token.service.js";

class UserService {

    async create(data, res) {
        const { username, password } = data;
        if (!username || !password) {
            return res.status(404).json({ message: "Gaps must be filled", error: true })
        }
        const existuser = await userModel.findOne({ username });
        if (existuser) {
            return res.status(404).json({ message: "User already exists", error: true });
        }
        const user = await userModel.create(data);
        //token generate 
        const token = tokenService.generateToken(user);
        return { user, token }
    }

    async login(data, res) {
        const { username, password } = data;
        if (!username || !password) {
            return res.status(404).json({ message: "Gaps must be filled", error: true })
        }
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found", error: true });
        }
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return res.status(404).json({ message: "Invalid credentials", error: true });
        }
        //token generate 
        const token = tokenService.generateToken(user);
        return { user, token }
    }
}

export default new UserService();
