const express = require('express') // Permite a configuração dos caminhos da aplicação
const cors = require('cors')  // Controla quais páginas podem acessar a aplicação
const routes = require('./routes') // Exporta o pacote routes

const app = express();

//Abaixo um modelo de como controlar que apenas um site específico poderá acessar meu backend
app.use(cors( /*{ origin: 'http://meuapp.com'}*/));

// Antes de todas as requisições manda o express ir no corpo da requisição e 
// Converte o json, em um objeto do JavaScript para o app entender
app.use(express.json()) // App está usando express
app.use(routes) // App está usando routes

const port = (process.env.PORT || 3333)

app.listen(port) 
//app.listen(3333) // outra forma de definir a porta que a aplicação será ouvida
// console.log("porta: ", port)
