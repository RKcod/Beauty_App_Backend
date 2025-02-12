const db = require("../../../../../knexInstance");
const PaginationProvider = require("../../../../providers/PaginationProvider");
const ShopModel = require("../models/ShopModel");

class ShopRepository {
  /**
   * Créer une boutique
   */
  static async create(shopData) {
    return db(ShopModel.getTableName()).insert(shopData).returning("*");
  }

  /**
   * Récupérer toutes les boutiques avec pagination
   */
  static async getAll(shopPaginateFilter, page, perPage) {
    let query = db(ShopModel.getTableName()).select("*");

    query = shopPaginateFilter.applyFilters(query);
    return PaginationProvider.paginate(query, page, perPage);
  }

  /**
   * Trouver une boutique par son ID
   */
  static async findById(shopId) {
    return db(ShopModel.getTableName()).where({ id: shopId }).first();
  }

  /**
   * Trouver une boutique par son propriétaire (Owner)
   */
  static async findByOwnerId(ownerId) {
    return db(ShopModel.getTableName()).where({ owner_id: ownerId }).first();
  }

  /**
   * Mettre à jour une boutique par son ID
   */
  static async updateById(shopId, shopData) {
    return db(ShopModel.getTableName())
      .where({ id: shopId })
      .update(shopData)
      .returning("*");
  }

  /**
   * Supprimer une boutique par son ID
   */
  static async deleteById(shopId) {
    return db(ShopModel.getTableName()).where({ id: shopId }).del();
  }

  /**
   * Vérifier si une boutique existe avec un email donné
   */
  static async findByEmail(email) {
    return db(ShopModel.getTableName()).where({ email }).first();
  }

  /**
   * Lier un utilisateur à une boutique (ajouter un staff)
   */
  static async assignStaffToShop(userId, shopId) {
    return db("users")
      .where({ id: userId })
      .update({ shop_id: shopId, user_type: "staff" })
      .returning("*");
  }

  /**
   * Récupérer les membres du personnel d'un shop
   */
  static async getStaffByShopId(shopId) {
    return db("users")
      .where({ shop_id: shopId, user_type: "staff" })
      .select("*");
  }
}

module.exports = ShopRepository;
