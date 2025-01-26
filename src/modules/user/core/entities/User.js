class User {
    constructor({ username, email, password, image, phone, address, city, created_at, updated_at }) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.image = image || null;
        this.phone = phone || null;
        this.address = address || null;
        this.city = city || null;
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
            throw new Error('Le numéro de téléphone est invalide.');
        }
    }

    validatePhone(phone) {
        const phoneRegex = /^[0-9]{9}$/; 
        return phoneRegex.test(phone);
    }
}

module.exports = User;
