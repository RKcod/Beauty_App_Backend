module.exports = class GetAllUsersResource {
    static toResource(user) {
        return {
            id: user.id,
            username: user.username,
            email: user.email,
            address: user.address,
            city:user.city,
            phone: user.phone,
            image: user.image,
            created_at: user.created_at,
            updated_at: user.updated_at,
            shop: user.shop ? {
                id: user.shop.id,
                name: user.shop.name,
                email: user.shop.email,
                address: user.shop.address,
                city: user.shop.city,
                phone: user.shop.phone,
                activity_domain: user.shop.activity_domain,
                created_at: user.shop.created_at,
                updated_at: user.shop.updated_at,
            } : null, 
        };
    }

    static collection(users) {
        return users.map((user) => this.toResource(user));
    }
};
