import { config } from '@fortawesome/fontawesome-svg-core';
import ThePlatform from './src/ThePlatform'

const pool = require('./mysql/config');


pool.get('/users', (request, response) => {
    pool.query('SELECT * FROM users', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});