// server.js
const express = require('express');
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require('path');
const PORT = 3100;
const userRoutes = require('../src/modules/user/interfaces/routes/userRoutes');
const roleRoutes = require('../src/modules/user/interfaces/routes/roleRoutes');
const permissionRoutes = require('../src/modules/user/interfaces/routes/permissionRoutes')
dotenv.config(); // Charger les variables d'environnement

// === MIDDLEWARES ===
// Sécurité avec Helmet
app.use(helmet());

// Activer CORS (pour permettre les requêtes d'autres domaines)
app.use(cors());

// Logger les requêtes HTTP
app.use(morgan("dev"));

// Pour gérer les requêtes JSON
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use("/api/v1", [userRoutes, roleRoutes, permissionRoutes]);
// define the route
app.get('/',
    (req, res) => {
        res.send(
            `<h1 style="color: green; text-align:center;">
            Hello Guys!</h1>`
        );
    });

app.listen(PORT,
    () => {
        console.log(
            `Server is listening at 
            http://localhost:${PORT}`
        );
    });
