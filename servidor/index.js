const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const app = express()
const port = 3000
const rutasPaginas = require('./rutas/rutasPaginas');
const connectDB = require('./conexiones/conexionBD');
const BaseDatos = require('./rutas/rutasBD');
const rutasArchivos=require('./rutas/rutasArchivos');


//************************************************************ */
//        middleware 
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir documentos estáticas
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

/*********************************************** */
// enrutamiento para servir paginas
app.use('/', rutasPaginas);

/********************************************* */
// enrutamiento para operaciones con la base de datos
app.use('/bd', BaseDatos);

/*************************************** */
// enrutamiento para operaciones con archivos
app.use('/upload', rutasArchivos);

//************************************************************ */
//        middleware para manejo de errores
app.use((req, res) => {
  res.status(404).send('Pagina no encontrada');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});



/*********************************************** */
// conexion a base datos
//connectDB();

app.listen(port, () => {
  console.log(`Servidor activo escuchando en el puerto http://localhost:${port}`)
})
