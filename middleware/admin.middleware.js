

const AuthMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        if (!token) {
            return res.status(401).json('Access denied. No token provided.');
        }
        
    } catch (error) {
        return res.status(400).json({
            message: "Invalid token",
            error: error.message
        })
    }
}