const { Client } = require('pg');

const connectionData = {
    user: '',
    host: '',
    database: '',
    password: '',
    port: 1
};

const client = new Client(connectionData)

client.connect()
    .then(response => {
        console.log('DB is connected')
    })
    .catch(err => {
        console.log('DB is not connected :(');
        client.end();
    })

module.exports = client;