module.exports = class GetAllUsersResource {
    static toResource(user) {
        return {
            id: user._id,
            username: user.username,
            email: user.email,
            address: user.address,
            city:user.city,
            phone: user.phone,
            image: user.image,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }

    static collection(users) {
        return users.map((user) => this.toResource(user));
    }
};
