# Utilise une image officielle de Node.js
FROM node:22-alpine3.18

# Définit le répertoire de travail
WORKDIR /usr/src/beauty_app_backend

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie tout le projet dans le conteneur
COPY . .


# Expose le port 3000 (ou celui de ton application)
EXPOSE 3100

# Commande pour démarrer l'application
CMD ["node", "src/server.js"]
