const express = require('express');
const cors = require('cors');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / recursos
 *
 */

 /**
  * Métodos HTTP
  * 
  * GET: Busca uma Informação do back-end
  * POST: Cria uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: parâmetros nomeados enviados na rota após o símbolo de "?" (Filtros, Paginação)
   * Route Params: Parâmetros utilizados para indentificar recursos precisa colocar ":id"
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * Bancos de Dados:
    * 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL SERVER
    * NoSQL: MongoDB, CouchDB, etc.
    * USAREMOS O SQL, NO SQLITE
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */

app.listen(3333);