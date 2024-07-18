import userService from "../service/user.service.js";

class UserController {

    async create(req, res, next) {
        try {
            const { user, token } = await userService.create(req.body, res);
            res.status(201).json({
                message: "Created",
                data: user,
                token: token
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async login(req, res, next) {
        try {
            const { user, token } = await userService.login(req.body, res);
            res.status(201).json({
                message: "Logged In",
                data: user,
                token: token
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new UserController();