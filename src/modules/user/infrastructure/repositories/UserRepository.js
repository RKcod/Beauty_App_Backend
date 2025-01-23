const db = require("../../../../../knexInstance");
const UserModel = require("../models/UserModel");

class UserRepository {
  static async findByEmail(email) {
    return db(UserModel.getTableName()).where({ email }).first();
  }

  static async create(userData) {
    return db(UserModel.getTableName()).insert(userData).returning("*");
  }

  
  static async getAll(userPaginateFilter, page = 1, perPage = 15) {
    let query = db(UserModel.getTableName()).select("*");

    query = userPaginateFilter.applyFilters(query);

    // Appliquer la pagination
    const offset = (page - 1) * perPage;
    query = query.limit(perPage).offset(offset);

    return query;
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
