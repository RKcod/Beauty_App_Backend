const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const PasswordService = {
    /**
     * Hash a password
     * @param {string} password 
     * @returns {Promise<string>} 
     */
    async hashPassword(password) {
        const saltRounds = 10; 
        return await bcrypt.hash(password, saltRounds);
    },

    /**
     * Compare a plain password with a hashed password
     * @param {string} password - The plain text password
     * @param {string} hash - The hashed password
     * @returns {Promise<boolean>} 
     */
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    },

    async generateTemporaryPassword(length = 10) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        return Array.from(crypto.randomFillSync(new Uint8Array(length)))
            .map((x) => chars[x % chars.length])
            .join('');
    }
};

module.exports = PasswordService;
