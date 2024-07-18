import jwt from "jsonwebtoken";

class TokenService {
    generateToken(user) {
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return { token }
    }

    verifyToken(token) {
        const token = jwt.verify(token, process.env.JWT_SECRET)
        return { token }
    }

}

export default new TokenService()