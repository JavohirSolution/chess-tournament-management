const adminMiddleware = async (req, res, next) => {
    try {
        const role = req.user.role;
        if (role !== "admin") {
            return res.status(401).json({ message: "Access denied. Only admin can change", error: true })
        }
        next()
    } catch (error) {
        console.log(error.message)
    }
}

export default adminMiddleware