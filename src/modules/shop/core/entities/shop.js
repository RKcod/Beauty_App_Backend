
class Shop {
  constructor({ name, email, phone, address, city, activity_domain, owner_id, created_at, updated_at }) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.activity_domain = activity_domain;
    this.owner_id = owner_id;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();

    this.validate();
  }

  /**
   * Valider les données du shop avant insertion
   */
  validate() {
    if (!this.name) {
      throw new Error('Le champ "name" est obligatoire.');
    }
    if (!this.email) {
      throw new Error('Le champ "email" est obligatoire.');
    }
    if (!this.phone) {
      throw new Error('Le champ "phone" est obligatoire.');
    }
    if (!this.activity_domain) {
      throw new Error('Le champ "activity_domain" est obligatoire.');
    }
    if (!this.owner_id) {
      throw new Error("Un propriétaire (owner_id) est requis.");
    }
    if (!this.validateEmail(this.email)) {
      throw new Error("L'adresse email est invalide.");
    }
    if (!this.validatePhone(this.phone)) {
      throw new Error("Le numéro de téléphone est invalide.");
    }
  }


  /**
   * Valider le format de l'email
   */
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Valider le format du téléphone (ex: 9 chiffres)
   */
  validatePhone(phone) {
    const phoneRegex = /^[0-9]{9,15}$/;
    return phoneRegex.test(phone);
  }
}

module.exports = Shop;
