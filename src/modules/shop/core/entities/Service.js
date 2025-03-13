module.exports = class Service {
  constructor({
    shop_id,
    name,
    description,
    price,
    duration,
    created_at,
    updated_at,
  }) {
    this.shop_id = shop_id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.duration = duration;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
  validate() {
    if (!this.shop_id) {
      throw new Error('Le champ " shop_id" est obligatoire.');
    }
  }
};
