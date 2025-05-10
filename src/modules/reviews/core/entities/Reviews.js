module.exports = class Review {
    constructor({
      shop_id,
      user_id,
      rating,
      comment,
      created_at,
      update_at,
    }) {
        this.shop_id = shop_id;
        this.user_id = user_id;
        this.rating = rating;
        this.comment = comment,
        this.created_at = created_at || new Date();
        this.update_at = update_at || new Date();
    }

}