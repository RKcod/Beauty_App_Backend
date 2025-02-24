class ServiceCategory {
  constructor({ name, description, created_at, updated_at }) {
    this.name = name;
    this.description = description;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
  validate() {
    if (!this.name) {
      throw new Error('Le champ "name" est obligatoire.');
    }
    if (!this.description) {
      throw new Error('Le champ "description" est obligatoire.');
    }
  }
}
