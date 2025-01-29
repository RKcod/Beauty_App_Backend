class User {
  constructor({
    username,
    email,
    password,
    image,
    phone,
    address,
    city,
    user_type = "visitor", // Par défaut, "visitor"
    shop_id = null,
    created_at,
    updated_at,
  }) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.image = image || null;
    this.phone = phone || null;
    this.address = address || null;
    this.city = city || null;
    this.user_type = user_type;
    this.shop_id = shop_id;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();

    this.validate();
  }

  validate() {
    if (!this.username) {
      throw new Error('Le champ "username" est obligatoire.');
    }
    if (!this.email) {
      throw new Error('Le champ "email" est obligatoire.');
    }
    if (!this.password) {
      throw new Error('Le champ "password" est obligatoire.');
    }
    if (this.phone && !this.validatePhone(this.phone)) {
      throw new Error("Le numéro de téléphone est invalide.");
    }
    if (!this.validateUserType(this.user_type)) {
      throw new Error("Le type d’utilisateur est invalide.");
    }
  }

  validatePhone(phone) {
    const phoneRegex = /^[0-9]{9}$/; // Regex pour vérifier un numéro à 9 chiffres
    return phoneRegex.test(phone);
  }

  validateUserType(userType) {
    const validUserTypes = ["visitor", "owner", "staff", "admin"];
    return validUserTypes.includes(userType);
  }

  isOwner() {
    return this.user_type === "owner";
  }

  isStaff() {
    return this.user_type === "staff";
  }

  isVisitor() {
    return this.user_type === "visitor";
  }

  isAdmin() {
    return this.user_type === "admin";
  }
}

module.exports = User;
