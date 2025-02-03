class AuthRequest {
    static validateRegister(data) {
        const { username, email, password } = data;

        if (!username || !email || !password) {
            throw new Error('Tous les champs "username", "email" et "password" sont obligatoires.');
        }
    }

    static validateLogin(data) {
        const { email, password } = data;

        if (!email || !password) {
            throw new Error('Les champs "email" et "password" sont obligatoires.');
        }
    }
}

module.exports = AuthRequest;
