module.exports = class ShopIdFilter {
    constructor(shopId) {
      this.shopId = shopId;
    }
  
    apply(query) {
      if (this.shopId) {
        query.where("shop_id", this.shopId);
      }
    }
  };
  