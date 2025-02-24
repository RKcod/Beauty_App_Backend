const ServiceCategoryAssignementsModel = require("../models/ServiceCategoryAssignementsModel");
const db = require("../../../../../knexInstance");
const paginationProvider = require("../../../../providers/PaginationProvider");

class ServiceCategoryAssignementRepository {
  static async create(data) {
 
      // Insertion de l'assignation dans la base de données
      return  db(ServiceCategoryAssignementsModel.getTableName()).insert(data).returning("*");   
  }
  
  static async getAll(dataPaginateFilter, page, perPage) {
    let query = ServiceCategoryAssignementsModel.query()
      .select("*")
      .withGraphFetched("[service,category]");

    query = dataPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }

  static async findById(dataId) {
    return await ServiceCategoryAssignementsModel.query()
      .findById(dataId) // Utiliser `findById` au lieu de `where({ id: dataId })`
      .withGraphFetched("[service, category]"); // Charger les relations
  }x

  static async deleteById(dataId) {
    return db(ServiceCategoryAssignementsModel.getTableName())
      .where({ id: dataId })
      .del();
  }
}
module.exports = ServiceCategoryAssignementRepository;
