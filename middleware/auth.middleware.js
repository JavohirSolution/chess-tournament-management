import userModel from "../model/user.model.js";
import tokenService from "../service/token.service.js";

const authMiddleware = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res.status(401).json({ message: "Access denied. No authorization provided.", error: true });
        }
        const token = authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Access denied. No token provided.", error: true });
        }
        const decode = tokenService.verifyToken(token);
        if (!decode) {
            return res.status(401).json({ message: "Access denied. Invalid token", error: true });
        }
        const user = await userModel.findById({ _id: decode.id });
        if (!user) {
            return unauthorized(res, "Invalid token")
        }
        req.user = user
        next()
    } catch (error) {
        console.log(error.message)
    }
}

export default authMiddleware