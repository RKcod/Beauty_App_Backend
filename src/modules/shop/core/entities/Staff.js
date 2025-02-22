class Staff {
  constructor({ user_id, shop_id, role, created_at, updated_at }) {
    this.user_id = user_id;
    this.shop_id = shop_id;
    this.role = role;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
  validate() {
    if (!this.role) {
      throw new Error('Le champ "role" est obligatoire.');
    }
  }
}
module.exports = Staff;
