import playerModel from "../model/player.model.js"

class PlayerService {
    async create(data, res) {
        const { name, age, rating, country } = data
        if (!name || !age || !country) {
            return res.status(401).json({ message: "Gaps must be filled", error: true })
        }
        const existPlayer = await playerModel.findOne({ name });
        if (existPlayer) {
            return res.status(401).json({ message: "Player already exists", error: true });
        }
        const player = await playerModel.create(data)
        return player
    }

    async update(id, data, res) {
        if (!id) {
            return res.status(401).json({ message: "Id does not provided", error: true })
        }
        const { name, age, rating, country } = data
        if (!name || !age || !country) {
            return res.status(401).json({ message: "Gaps must be filled", error: true })
        }
        const player = await playerModel.findByIdAndUpdate(id, data, { new: true });
        return player
    }

    async delete(id, res) {
        if (!id) {
            return res.status(401).json({ message: "Id does not provided", error: true })
        }
        const player = await playerModel.findByIdAndDelete(id);
        return player
    }

    async view(id, res) {
        if (!id) {
            return res.status(401).json({ message: "Id does not provided", error: true })
        }
        const player = await playerModel.findById(id)
        if (!player) {
            return res.status(401).json({ message: "Player does not exist", error: true })
        }
        return player
    }
}

export default new PlayerService()