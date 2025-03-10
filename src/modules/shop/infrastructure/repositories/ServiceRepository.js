const ServiceModel = require("../models/ServiceModel");
const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ServiceRepository {
  // static async create(serviceData) {
  //   return db(ServiceModel.getTableName()).insert(serviceData).returning("*");
  // }
  static async create(serviceData) {
    // Insérer le service et récupérer son ID
    const service = await ServiceModel.query()
      .insert(serviceData)
      .returning("*");
    return ServiceModel.query()
      .findById(service.id)
      .withGraphFetched("[shops]");
  }

  static async getAll(servicePaginateFilter, page, perPage) {
    // Créer une requête de base pour récupérer tous les services avec leurs shops associés
    let query = ServiceModel.query().select("*").withGraphFetched("shops");

    // Appliquer des filtres si le filtre est fourni
    if (servicePaginateFilter) {
      query = servicePaginateFilter.applyFilters(query);
    }

    // Appliquer la pagination à la requête en fonction de la page et du nombre d'éléments par page
    return paginationProvider.paginate(query, page, perPage);
  }

  static async findById(serviceId) {
    return ServiceModel.query().findById(serviceId).withGraphFetched("shops"); // "shop" doit correspondre à la relation définie dans ServiceModel
  }
  static async findByName(name) {
    return db(ServiceModel.getTableName())
      .where({ name: name })
      .first();
  }
  static async findByOwnerId(serviceId) {
    return db(ServiceModel.getTableName())
      .where({ shop_id: serviceId })
      .first();
  }
  static async deleteById(serviceId) {
    return db(ServiceModel.getTableName()).where({ id: serviceId }).del();
  }
  static async updateById(dataId, data) {
    return db(ServiceModel.getTableName())
      .where({ id: dataId })
      .update(data)
      .returning("*");
  }
}
module.exports = ServiceRepository;
