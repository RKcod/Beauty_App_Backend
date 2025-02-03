const slugify = require("slugify");

class Role {
    constructor({ name, slug, description, created_at, updated_at }) {
        this.name = name;
        this.slug = slug || this.generateSlug(name);
        this.description = description || null;
        this.created_at = created_at || new Date();
        this.updated_at = updated_at || new Date();

        this.validate();
    }

    validate() {
        if (!this.name) {
            throw new Error('Le champ "name" est obligatoire.');
        }
        if (typeof this.name !== "string") {
            throw new Error('Le champ "name" doit être une chaîne de caractères.');
        }
    }

    generateSlug(name) {
        if (!name) {
            throw new Error('Le champ "name" est requis pour générer un slug.');
        }
        return slugify(name, { lower: true, strict: true });
    }

    setDescription(description) {
        this.description = description;
    }
}

module.exports = Role;
