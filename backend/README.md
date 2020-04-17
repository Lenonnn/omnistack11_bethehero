npx serve para executar uma pacote aon invés de instalar um pacote

 /**
     * -->  MÉTODOS HTTP:
     * GET / PUT / POST / DELETE
     * 
     * --> Tipos de parâmentros:
     * Query Params: Parâmetros nomeados enviados na rota após "?" ( filtos, paginação)
     * -------   http://localhost:3333/users?page=2&nome=Dev&idade=30  ----------
     * 
     * Route Params: Utilizado para identificar recursos
     *  ------   app.get(users/:id) - > http://localhost:3333/users/1  ----------
     * 
     * Request Boby: Corpo da requisição, utilizado para criar ou alterar recursos
    **/

    /** 
     * --> BANCOS DE DADOS
     * 
     * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
     * //////////////// Liguagem SQL Universaol ///////////////////////
     * 
     * NoSQL: MongoDB, CouchDB, etc.
     * /////////////// Linguagens próprias   /////////////////////////
     * 
     * --> COMUNICAÇÂO COM O BANCO DE DADOS
     * /// Intalando DRIVER : SELECT * FROM users
     * /// Query Builder usando JS: table('users').select('*').where()
     * 
    **/