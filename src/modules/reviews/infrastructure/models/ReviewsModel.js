const BaseModel = require("../../../../shared/BaseModel");

module.exports = class ReviewsModel extends BaseModel{
    static get tableName() {
        return "reviews";
    }
    static get relationMappings() {
        const userModel = require("../../../user/infrastructure/models/UserModel");
        const shopModel = require("../../../shop/infrastructure/models/ShopModel");
        return {
         users: this.belongsTo(userModel, "reviews.user_id", "users.id"),
         shops: this.belongsTo(shopModel, "reviews.shop_id", "shops.id"),
      
        }


    }

}