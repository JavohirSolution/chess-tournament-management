import jwt from "jsonwebtoken";

class TokenService {
    generateToken(user) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "60d" });
        return token
    }

    verifyToken(token) {
        const tokenn = jwt.verify(token, process.env.JWT_SECRET)
        return tokenn
    }
}

export default new TokenService()