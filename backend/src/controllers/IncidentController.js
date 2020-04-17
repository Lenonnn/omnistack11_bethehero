const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;

        //Vai retornar a quantidade de casos
        const [count] = await connection('incidents').count();
        //Imprime no console e a quantidade de
        // console.log("Histórias disponíveis", count);

        const incidentsList = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //seleciona entre incident e ong os dados com a mesma id
        .limit(5) // limita a 5 feeds por página
        .offset((page -1 )* 5) // busca 5 registros desde a página incial
        //Seleciona dados selecionados do tabela 'ongs'
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        //Vai retornar pelo Header de resposta no insomnia/postman
        response.header('X-Total-Count', count['count(*)']);
        //Retorna os dados dos incidetns em formato JSON
        return response.json(incidentsList);
    },




    async create(request, response) {
        //Corpo da requisição
        const { title, description, value } = request.body;
        // acessa od ID da ong usando o cabeçalho de autorização
        // determinado pelo login do usuário
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id })
    },
    



    async delete(request, response) {
        //Vai buscar o 'incidents' pelo id
        const { id } = request.params;
        //Vai buscar a ID da ong logada 
        const ong_id = request.headers.authorization
        //Irá buscar dados de uma postagem
        const incident = await connection('incidents')
            .where('id', id)  
            .select('ong_id')
            .first();
        // Verificará de o usuário é o autor da postagem
        if(incident.ong_id != ong_id) {
            //Caso o usuário não seja o autor, exibe erro
            return response.status(401).json({ error: 'Operação não permitida'});
        }
        //Caso o usuário seja o autor, deleta do banco de dados
        await connection('incidents').where('id', id).delete();
        //Devolve resposta de sucesso e agora o conteúdo não existe
        return response.status(204).send()
    }



};