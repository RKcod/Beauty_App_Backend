module.exports = class GetServicesResource {
  static toResource(service) {
    return {
      id: service.id,
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration,
      shops: service.shops
        ? service.shops.map((shop) => ({
            id: shop.id,
            name: shop.name,
            email: shop.email,
            phone: shop.phone,
            city: shop.city,
            activity_domain: shop.activity_domain,
          }))
        : [],
      created_at: service.created_at,
      updated_at: service.updated_at,
    };
  }
  static collection(services) {
    return services.map((service) => this.toResource(service));
  }
};
