import playerService from "../service/player.service.js";

class PlayerController {
    async create(req, res, next) {
        try {
            const player = await playerService.create(req.body, res);
            res.status(201).json({
                message: "Created",
                data: player,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async update(req, res, next) {
        try {
            const player = await playerService.update(req.params.id, req.body, res);
            res.status(200).json({
                message: "Updated",
                data: player,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async delete(req, res, next) {
        try {
            const player = await playerService.delete(req.params.id, res);
            res.status(200).json({
                message: "Deleted",
                data: player,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async view(req, res, next) {
        try {
            const player = await playerService.view(req.params.id, res);
            res.status(200).json({
                message: "Information about player",
                data: player,
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    async getAll(req, res, next) {
        try {
            const players = await playerService.getAll();
            res.status(201).json({
                message: "list of players",
                data: players,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new PlayerController()