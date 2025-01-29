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


  /**
   * Récupère les rôles associés à un utilisateur
   * @param {number} userId - Identifiant de l'utilisateur
   * @returns {Promise<Array>} - Liste des rôles
   */
  static async getRolesByUserId(userId) {
    return db("user_roles")
      .join("roles", "user_roles.role_id", "roles.id")
      .select("roles.id", "roles.name")
      .where("user_roles.user_id", userId);
  }

  /**
   * Associe un rôle à un utilisateur
   * @param {number} userId - Identifiant de l'utilisateur
   * @param {number} roleId - Identifiant du rôle
   * @returns {Promise<Object>} - Résultat de l'insertion
   */
  static async assignRoleToUser(userId, roleId) {
    return db("user_roles").insert({
      user_id: userId,
      role_id: roleId,
    });
  }

  /**
   * Supprime un rôle associé à un utilisateur
   * @param {number} userId - Identifiant de l'utilisateur
   * @param {number} roleId - Identifiant du rôle
   * @returns {Promise<number>} - Nombre de lignes supprimées
   */
  static async removeRoleFromUser(userId, roleId) {
    return db("user_roles")
      .where({
        user_id: userId,
        role_id: roleId,
      })
      .del();
  }

  /**
   * Vérifie si un utilisateur a un rôle spécifique
   * @param {number} userId - Identifiant de l'utilisateur
   * @param {string} roleName - Nom du rôle
   * @returns {Promise<boolean>} - True si l'utilisateur a le rôle, false sinon
   */
  static async hasRole(userId, roleName) {
    const result = await db("user_roles")
      .join("roles", "user_roles.role_id", "roles.id")
      .select("roles.id")
      .where({
        "user_roles.user_id": userId,
        "roles.name": roleName,
      })
      .first();

    return !!result;
  }
}

module.exports = UserRepository;
