# Beauty_App_Backend Documentation

## Commandes pour la gestion des modules, migrations et seeders

### 1. Création Module
Pour générer un module avec la structure préconfigurée, utilisez la commande suivante :
```bash
node generateModule.js <NomDuModule> 
```

### 2. Gestion des Migrations

#### 2.1 Création  Migration
Pour créer une migration il suffit juste d'exécuter la commande ci-dessous 

```bash
npx knex migrate:make <nom_de_la_migration> --knexfile knexfile.js 
```

#### 2.2 Lancer toutes les Migrations

```bash
npx knex migrate:latest --knexfile knexfile.js 
```

#### 2.3 Annuler une Migration

```bash
npx knex migrate:rollback --knexfile knexfile.js 
```

#### 2.4 Exécuter une migration spécifique

```bash
npx knex migrate:up --knexfile knexfile.js <NomDeLaMigration>
```

### 3. Gestion des Seeders

#### 3.1 Création Seeder

```bash
npx knex seed:make <nom_du_seeder> --knexfile knexfile.js 
```

#### 3.2 Exécuter tous les seeders

```bash
npx knex seed:run --knexfile knexfile.js 
```

#### 3.3 Exécuter un seeder spécifique

```bash
npx knex seed:run --knexfile knexfile.js --specific=userSeeder.js o
```