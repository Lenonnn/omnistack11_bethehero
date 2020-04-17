// Serve para criptografia 
// Mas pode ser usado para gerar uma string aleatória com vário caracteres juntos
const crypto = require('crypto');


const connection = require('../database/connection'); // Conecta com o banco de dados



module.exports = {

    //Método que busca a listagem de todos os dados
    async index ( request, response){
        //Seleciona todos os dados da tabela 'ongs'
        const ongs = await connection('ongs').select('*');
        //Retorna res/response no formato JSON com todos os dados buscados no banco
        return response.json(ongs)
    },


    //Método que cria uma ong
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        // Vai gerar 4 bites de caracteres HEXADECIMAIS aleatórios e gerar uma id
        const id = crypto.randomBytes(4).toString('HEX');
        
        //Define método insert e passa nome da tabela e campos de inserção
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        // return Id gerado aleatóriamente
        return response.json({ id });
    }


}