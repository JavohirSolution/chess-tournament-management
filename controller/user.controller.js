import userService from "../service/user.service.js";

class UserController {
    async getAll(req, res, next) {
        try {
            const users = await userService.getAll();
            res.status(200).json({
                message: "All Users",
                data: users
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async create(req, res, next) {
        try {
            const user = userService.create(req.body);
            res.status(201).json({
                message: "Created",
                data: user
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new UserController();