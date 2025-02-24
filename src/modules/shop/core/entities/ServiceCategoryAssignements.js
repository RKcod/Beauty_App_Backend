class ServiceCategoryAssignements {
  constructor({ service_id, category_id, created_at, updated_at }) {
    this.service_id = service_id;
    this.category_id = category_id;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
  validate() {
    
    if (!this.service_id) {
      throw new Error('Le champ " service_id" est obligatoire.');
    }
  }
}
