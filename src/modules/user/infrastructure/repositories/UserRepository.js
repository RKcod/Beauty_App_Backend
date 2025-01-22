const db = require('../../../../../knexInstance');
const UserModel = require('../models/UserModel');

class UserRepository {
    static async findByEmail(email) {
        return db(UserModel.getTableName()).where({ email }).first();
    }

    static async create(userData) {
        return db(UserModel.getTableName()).insert(userData).returning('*');
    }
}

module.exports = UserRepository;
