import dotenv from 'dotenv';

console.log('Environment :',process.env.NODE_ENV);

dotenv.config({path : `./environment/.env.${process.env.NODE_ENV}`});

console.log( 'PORT : ',process.env.PORT);
