const config = require('./config');
const mysql = require('mysql');

module.exports = () => {
    return mysql.createPool({
        connectionLimit: 10,
        host: '35.209.204.163',
        user: 'uqbhcavgmbpts',
        password: '4lo#4d1%7%#1',
        database: 'dbcfd5endvqsc0'
    });
}