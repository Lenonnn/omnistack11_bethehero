const connection = require('../database/connection')

// Controlador de sessão
module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await  connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {
            return response.status(400).json({ error: 'ID ou ONG inexistente' })
        }

        return response.json(ong);

    }
}