module.exports = class PermissionResource {
    static toResource(permission) {
        return {
            id: permission.id,
            slug: permission.slug,
            name: permission.name,
            description: permission.description,
            created_at: permission.created_at,
            updated_at: permission.updated_at,
        };
    }

    static collection(permissions) {
        return permissions.map((permission) => this.toResource(permission));
    }
};
