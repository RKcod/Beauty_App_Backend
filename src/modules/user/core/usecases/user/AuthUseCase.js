const jwt = require('jsonwebtoken');
const User = require('../../entities/User');
const UserRepository = require('../../../infrastructure/repositories/UserRepository');
const passwordService = require('../../../infrastructure/services/PasswordService');

const JWT_SECRET = process.env.JWT_SECRET ;

class AuthUseCase {
    static async register(userData) {
        const user = new User(userData);

        const existingUser = await UserRepository.findByEmail(user.email);
        if (existingUser) {
            throw new Error('This user is already existed.');
        }

        user.password = await passwordService.hashPassword(user.password, 10);

        const savedUser = await UserRepository.create(user);

        return savedUser;
    }

    static async login(credentials) {
        const { email, password } = credentials;

        // Rechercher l'utilisateur
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error('This user is not found.');
        }

        // Vérifier le mot de passe
        const isPasswordValid = await passwordService.comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new Error('password incorrect.');
        }

        // Générer un token JWT
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        return token;
    }
}

module.exports = AuthUseCase;
