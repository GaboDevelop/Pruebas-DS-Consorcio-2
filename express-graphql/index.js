const { makeExecutableSchema } = require('graphql-tools');
const express = require('express');
const gqlMiddleware = require("express-graphql");
const { readFileSync } = require("fs");
const { join } = require('path');
const resolvers = require('./lib/resolvers');

//Iniciando la aplicación
const app = express();
const port = process.env.port || 4000;

//definiendo el esquema
const typeDefs = readFileSync(
    join(__dirname, '/lib', 'schema.graphql'),
    'utf-8'
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

//Configurando el entorno
app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

//Asignando el puerto
app.listen(port, () => {
    console.log("Server on port: ", port);
})