const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Chemin vers le répertoire "uploads"
const uploadDir = path.join(__dirname, '../../../uploads');

// Vérifier et créer le dossier "uploads" s'il n'existe pas
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuration du stockage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Répertoire où les fichiers seront enregistrés
  },
  filename: (req, file, cb) => {
    const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename); 
  },
});

const upload = multer({ storage });

module.exports = upload;
