const express= require('express');
const logger=require('morgan');
const bodyParser = require('body-parser');

//tipode servidor que realizaremos//
const http = require('http');
const { parse } = require('path');

//iniciar configuracion express
const app=express();

//log mostrar informacion en consola
app.use(logger('dev'));

//parsearlas entradas de solicitud de datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//configura las rutas de bienvenida del servidor
app.get('/',(req, res)=>res.status(200).send({message: 'Bienvenido a la API REST de compras jessi',}))

const port= parseInt(process.env.PORT,10)||8000;
app.set('port',port);
const server =http.createServer(app);
server.listen(port);

module.exports =app;
