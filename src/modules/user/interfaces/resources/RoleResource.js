module.exports = class RoleResource {
    static toResource(role) {
        return {
            id: role.id,
            slug: role.slug,
            name: role.name,
            description: role.description,
            created_at: role.created_at,
            updated_at: role.updated_at,
        };
    }

    static collection(roles) {
        return roles.map((role) => this.toResource(role));
    }
};
