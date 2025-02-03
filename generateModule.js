const fs = require('fs');
const path = require('path');

// Base path pour tous les modules
const BASE_PATH = './src/modules';

// Template pour la structure d'un module
const moduleTemplate = (moduleName) => ({
    core: [
        `/entities/${moduleName}.js`,
        `/usecases/Create${moduleName}.js`,
        `/usecases/Get${moduleName}.js`,
    ],
    application: [
        `/requests/Create${moduleName}Request.js`,
        `/filters/${moduleName}Filter.js`,
        `/queries/Get${moduleName}Query.js`,
    ],
    infrastructure: [
        `/models/${moduleName}Model.js`,
        `/repositories/${moduleName}Repository.js`,
        `/services/${moduleName}Service.js`,
        `/providers/${moduleName}Provider.js`,
    ],
    helpers: [
        `/helpers/format${moduleName}.js`,
    ],
    interfaces: [
        `/controllers/${moduleName}Controller.js`,
        `/routes/${moduleName.toLowerCase()}Routes.js`,
        `/middlewares/${moduleName.toLowerCase()}Middleware.js`,
        `/resources/${moduleName.toLowerCase()}Resource.js`,
    ],
});

// Fonction pour créer un fichier avec du contenu par défaut
function createFile(filePath, content = '// TODO: Implement logic') {
    fs.mkdirSync(path.dirname(filePath), { recursive: true }); // Crée les dossiers parents si nécessaire
    fs.writeFileSync(filePath, content); // Crée le fichier avec le contenu par défaut
}

// Fonction principale pour créer un module
function createModule(moduleName) {
    if (!moduleName) {
        console.error('Veuillez fournir un nom de module.');
        return;
    }

    const modulePath = path.join(BASE_PATH, moduleName.toLowerCase());
    const template = moduleTemplate(moduleName);

    Object.keys(template).forEach((layer) => {
        template[layer].forEach((file) => {
            const filePath = path.join(modulePath, layer, file); // Ajoute le chemin du dossier parent (layer)
            createFile(filePath);
        });
    });

    console.log(`Module "${moduleName}" créé avec succès dans "${modulePath}".`);
}

// Récupérer le nom du module depuis les arguments
const moduleName = process.argv[2]; // Exemple : node generateModule.js User
createModule(moduleName);
