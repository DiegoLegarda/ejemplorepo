const express = require('express');
const rutas = express.Router();
const Archivos=require('../controladores/controladorArchivos');

rutas.post('/imagen', Archivos.upload.single('imagen'), Archivos.subirImagen);
rutas.post('/documento', Archivos.upload.single('documento'), Archivos.subirDocumento);


module.exports=rutas;
