const ShopRepository = require('../../infrastructure/repositories/ShopRepository');

module.exports = class GetShopUseCase{
    static async getShops(shopPaginateFilter, page = 1, perPage = 15){
        return await ShopRepository.getAll(shopPaginateFilter, page = 1, perPage = 15);
    }
}