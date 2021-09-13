const config = require('./config');
const mysql = require('mysql');

module.exports = () => {
    return mysql.createPool({
        connectionLimit: 10,
        host: '35.209.204.163',
        username: 'uqbhcavgmbpts',
        password: "dd13b%s$tc`1",
        database: 'dbcfd5endvqsc0'
    });
}