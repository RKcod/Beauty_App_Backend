module.exports = class GetServiceCategoryResource {
  static toResource(data) {
    return {
      id: data.id,
      service: data.service_id,
      category: data.category_id,
      service: Array.isArray(data.service) // ✅ Vérifie si `data.service` est un tableau
        ? data.service.map((service) => ({
            id: service.id,
            name: service.name,
            description: service.description,
            price: service.price,
            duration: service.duration,
          }))
        : data.service // ✅ Si ce n'est pas un tableau, renvoie un objet
          ? {
              id: data.service.id,
              name: data.service.name,
              description: data.service.description,
              price: data.service.price,
              duration: data.service.duration,
            }
          : [], // ✅ Retourne un tableau vide si `data.service` est null ou undefined

        category: Array.isArray(data.category) // ✅ Vérifie si `data.category` est un tableau
        ? data.category.map((category) => ({
            id: category.id,
            name: category.name,
          }))
        : data.category // ✅ Si ce n'est pas un tableau, renvoie un objet
          ? {
              id: data.category.id,
              name: data.category.name,
            }
          : [], // ✅ Retourne un t
    };
  }
  static collection(datas) {
    if (!Array.isArray(datas)) {
      throw new Error("Expected an array but got something else.");
    }
    return datas.map((data) => this.toResource(data));
  }

};
