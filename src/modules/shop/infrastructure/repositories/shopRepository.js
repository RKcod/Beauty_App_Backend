const db = require("../../../../../knexInstance");
const ShopModel = require("../models/ShopModel");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ShopRepository {
  /**
   * Créer une boutique
   */
  static async create(serviceData) {
    // Insérer le service et récupérer son ID
    const service = await ShopModel.query().insert(serviceData).returning("*");
    return ShopModel.query().findById(service.id).withGraphFetched("users");
  }
  /**
   * Récupérer toutes les boutiques avec pagination
   */
  static async getAll(shopPaginateFilter, page, perPage) {
    let query = ShopModel.query().select("*").withGraphFetched("users");

    query = shopPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }

  /**
   * Trouver une boutique par son ID
   */
  // static async findById(shopId) {
  //   return db(ShopModel.getTableName()).where({ id: shopId }).first();
  // }
  static async findById(dataId) {
    return await ShopModel.query()
      .findById(dataId) // Utiliser `findById` au lieu de `where({ id: dataId })`
      .withGraphFetched("users"); // Charger les relations
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
  // static async updateById(shopId, shopData) {
  //   return db(ShopModel.getTableName())
  //     .where({ id: shopId })
  //     .update(shopData)
  //     .returning("*");
  // }
  static async update(shopId, shopData) {
    try {
      // Mettre à jour la revue dans la base de données
      await ShopModel
        .query()
        .patchAndFetchById(shopId, shopData) // Mettre à jour et récupérer la revue modifiée
        .withGraphFetched("[users]"); // Charger les relations users et shops

      // Récupérer la revue mise à jour avec les relations
      const updatedShop = await ShopModel
        .query()
        .findById(shopId)
        .withGraphFetched("[users]"); // Charger les relations users et shops
      
      // Retourner la revue mise à jour avec ses relations
      return {
        message: "Review updated successfully.",
        data: updatedShop,
      };
    } catch (error) {
      console.error("Error updating review:", error.message);
      console.error("Stack trace:", error.stack);
      throw new Error("An error occurred while updating the review");
    }
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
