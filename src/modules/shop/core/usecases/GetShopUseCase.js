const ShopRepository = require('../../infrastructure/repositories/shopRepository');

module.exports = class GetShopUseCase{
    static async getShops(shopPaginateFilter, page = 1, perPage = 15){
        return await ShopRepository.getAll(shopPaginateFilter, page = 1, perPage = 15);
    }
}