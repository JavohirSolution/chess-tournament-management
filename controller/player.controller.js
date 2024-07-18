import playerService from "../service/player.service.js";

class PlayerController {
    async create(req, res, next) {
        try {
            const user = req.user
            const player = await playerService.create(req.body, user, res)
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new PlayerController()