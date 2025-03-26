module.exports = class GetReviewsResource {
    static toResource(review) {
     // Ajoute ce log pour vérifier la structure des données
      return {
        id: review.id,
        rating: review.rating,
        comment: review.comment,
        created_at: review.created_at,
        updated_at: review.updated_at,
        user_id: review.user_id,
        shop_id: review.shop_id,
  
        users: review.users
            ? {
                id: review.users.id,
                username: review.users.username,
                email: review.users.email,
                phone: review.users.phone,
                user_type: review.users.user_type,
              }
            : null, 
         shops: review.shops
        ? {
            id: review.shops.id,
            name: review.shops.name,
          }
        : null,
      };
    }
  
    static collection(reviews) {
      return reviews.map((review) => this.toResource(review));
    }
  };
  