class Staff {
  constructor({shop_id, role, name, email, phone, address, activity_domain,city,created_at, updated_at }) {
    this.shop_id = shop_id;
    this.role = role;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.activity_domain = activity_domain;
    this.city = city;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
  }
  validate() {
    if (!this.role) {
      throw new Error('Le champ "role" est obligatoire.');
    }
   
    if (!this.shop_id) {
      throw new Error('Le champ " shop_id" est obligatoire.');
    }
  }
}
module.exports = Staff;
