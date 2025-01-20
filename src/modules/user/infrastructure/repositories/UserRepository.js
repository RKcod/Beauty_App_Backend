const knex = require('../../../../../knexfile');
const UserModel = require('../models/UserModel');

class UserRepository {
    static async findByEmail(email) {
        return knex(UserModel.getTableName()).where({ email }).first();
    }

    static async create(userData) {
        return knex(UserModel.getTableName()).insert(userData).returning('*');
    }
}

module.exports = UserRepository;
