const multer = require('multer');
const path = require('path');

/********************************************* */
//  Para recibir y enviar archivos

// Configurar almacenamiento de multer
const almacenamiento = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  });
  
  const upload = multer({ storage: almacenamiento });
  
  
  // para subir imágen
const subirImagen = (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
  };
  
  // Ruta para subir documento
 const subirDocumento = (req, res) => {
    res.json({ filePath: `/uploads/${req.file.filename}` });
  };
  
  
  module.exports={
        upload,
        subirImagen,
        subirDocumento
  }
  