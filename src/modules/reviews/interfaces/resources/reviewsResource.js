module.exports = class GetStaffsResource {
    static toResource(review) {
      console.log(review); // Ajoute ce log pour vérifier la structure des données
      return {
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        created_at: review.created_at,
        updated_at: review.update_at,
        user_id: review.user_id,
        shop_id: review.shop_id,
  
        users: Array.isArray(review.users)
          ? review.users.map((user) => ({
              id: user.id,
              username: user.username,
              email: user.email,
              phone: user.phone,
              user_type: user.user_type,
            }))
          : [],
        shops: Array.isArray(review.shops)
          ? review.shops.map((shop) => ({
              id: shop.id,
              name: shop.name,
            }))
          : [],
      };
    }
  
    static collection(reviews) {
      return reviews.map((review) => this.toResource(review));
    }
  };
  