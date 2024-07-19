import tournamentService from "../service/tournament.service.js";

class TournamentController {
    async create(req, res, next) {
        try {
            const tournament = await tournamentService.create(req.body, res);
            return res.status(201).json({
                message: "Tournament created",
                data: tournament
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async assignPlayer(req, res, next) {
        try {
            const id = req.params.id;
            const tournament = await tournamentService.assignPlayer(id, req.body.players, res);
            return res.status(200).json({
                message: "Added player to Tournament",
                data: tournament
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    async getTournaments(req, res, next) {
        try {
            const tournaments = await tournamentService.getTournaments();
            return res.status(200).json({
                message: "List of Tournament",
                data: tournaments
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export default new TournamentController()