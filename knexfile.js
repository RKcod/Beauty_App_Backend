const path = require('path');
function extractModuleName(args) {


    // Trouver l'index de l'argument "--cwd"
    const cwdIndex = args.findIndex(arg => arg === '--cwd');
    if (cwdIndex === -1 || !args[cwdIndex + 1]) {
        console.log("Argument '--cwd' non trouvé ou chemin manquant.");
        return null;
    }

    // Récupérer le chemin après "--cwd"
    const cwdPath = args[cwdIndex + 1];

    // Extraire le nom du module depuis le chemin
    const match = cwdPath.match(/modules\/([^/]+)\/infrastructure/);

    return match ? match[1] : null;
}

const args = process.argv.slice(2); // Arguments après "node script.js"
const moduleName = extractModuleName(args);



module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            user: process.env.DB_USER || 'postgres',
            password: process.env.DB_PASSWORD || 'password',
            database: process.env.DB_NAME || 'beauty_app',
            port: process.env.DB_PORT || 5432,
        },
        migrations: {
            directory: moduleName
                ? path.resolve(__dirname, `src/modules/${moduleName}/infrastructure/migrations`)
                : path.resolve(__dirname, 'src/migrations'),
        },
        seeds: {
            directory: moduleName
                ? path.resolve(__dirname, `src/modules/${moduleName}/infrastructure/seeders`)
                : path.resolve(__dirname, 'src/seeders'),
        },
    },
};
