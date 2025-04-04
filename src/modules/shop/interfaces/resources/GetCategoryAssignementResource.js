
module.exports = class GetCategoryAssignementResource {
  static toResource(data) {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
      services: Array.isArray(data.services)
        ? data.services.map((service) => ({
            id: service.id,
            shop_id: service.shop_id,
            name: service.name,
            description: service.description,
            price: service.price,
            duration: service.duration,
            image:service.image,
            created_at: service.created_at,
            updated_at: service.updated_at,
          }))
        : [],
    };
  }

  static collection(datas) {
    if (!Array.isArray(datas)) {
      throw new Error("Expected an array but got something else.");
    }
    return datas.map((data) => this.toResource(data));
  }
};
