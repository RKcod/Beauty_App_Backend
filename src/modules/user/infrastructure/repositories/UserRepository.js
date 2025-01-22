const db = require("../../../../../knexInstance");
const UserModel = require("../models/UserModel");

class UserRepository {
  static async findByEmail(email) {
    return db(UserModel.getTableName()).where({ email }).first();
  }

  static async create(userData) {
    return db(UserModel.getTableName()).insert(userData).returning("*");
  }

  
  static async getAll() {
    return db(UserModel.getTableName()).select("*");
  }

  static async findById(userId) {
    return db(UserModel.getTableName()).where({ id: userId }).first();
  }

  static async updateById(userId, userData) {
    return db(UserModel.getTableName())
      .where({ id: userId })
      .update(userData)
      .returning("*");
  }


  static async deleteById(userId) {
    return db(UserModel.getTableName()).where({ id: userId }).del();
  }


  static async findByCondition(condition) {
    return db(UserModel.getTableName()).where(condition);
  }
}

module.exports = UserRepository;
