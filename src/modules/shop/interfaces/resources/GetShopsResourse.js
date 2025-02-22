module.exports = class GetShopsResource {
  static toResource(shop) {
    return {
      id: shop.id,
      name: shop.name,
      email: shop.email,
      address: shop.address,
      city: shop.city,
      phone: shop.phone,
      activity_domain: shop.activity_domain,
      created_at: shop.created_at,
      updated_at: shop.updated_at,
      users: shop.users
        ? shop.users.map((user) => ({
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            user_type: user.user_type,
          }))
        : [],
    };
  }

  static collection(shops) {
    return shops.map((shop) => this.toResource(shop));
  }
};
