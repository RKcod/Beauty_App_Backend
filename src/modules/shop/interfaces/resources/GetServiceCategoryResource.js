module.exports = class GetServiceCategoryResource {
  static toResource(data) {
    return {
      id: data.id,
      name: data.name,
      description: data.description,
       created_at: data.created_at,
       updated_at: data.updated_at,
    };
  }
  static collection(data) {
    return data.map((data) => this.toResource(data));
  }
};
