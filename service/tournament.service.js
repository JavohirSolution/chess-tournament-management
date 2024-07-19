import playerModel from "../model/player.model.js";
import tournamentModel from "../model/tournament.model.js";

const populate = [
    {
        path: "players"
    }
]

class TournamentService {
    async create(data, res) {
        const { name, startDate, endDate } = data;
        if (!name || !startDate) {
            return res.status(404).json({ message: "Gaps must be filled", error: true });
        }
        const existName = await tournamentModel.findOne({ name });
        if (existName) {
            return res.status(404).json({ message: `'${existName.name}' tournament already exist`, error: true });
        }
        const tournament = await tournamentModel.create(data);
        return tournament
    }

    async assignPlayer(id, data, res) {
        const tournament = await tournamentModel.findById(id);
        if (!tournament) {
            return res.status(404).json({ message: 'Tournament not found', error: true });
        }
        for (const playerId of data) {
            const player = await playerModel.findById(playerId);
            if (!player) {
                return res.status(404).json({ message: `Player with ID ${playerId} not found`, error: true });
            }
            if (!tournament.players.includes(playerId)) {
                tournament.players.push(playerId);
            } else {
                return res.status(404).json({ message: `Player with ID ${playerId} already in this tournament`, error: true });
            }
        }
        await tournament.save()
        return tournament
    }

    async getTournaments() {
        const tournaments = await tournamentModel.find({}).populate(populate);
        return tournaments
    }
}

export default new TournamentService()