const express = require('express'); // permite a configuração dos caminhos da aplicação

const OngControl = require('./controllers/OngsController')
const IncidentControl = require('./controllers/IncidentController')
const ProfileControl = require('./controllers/ProfileController')
const SessionControl = require('./controllers/SessionController')


const routes = express.Router(); // Desacopla o módulo de rotas do express em uma nova variável

routes.post('/sessions', SessionControl.create)

routes.get('/ongs', OngControl.index);
routes.post('/ongs', OngControl.create);

routes.get('/profile', ProfileControl.index)

routes.get('/incidents', IncidentControl.index);
routes.post('/incidents', IncidentControl.create);
routes.delete('/incidents/:id', IncidentControl.delete)



module.exports = routes // Exporta a var routes