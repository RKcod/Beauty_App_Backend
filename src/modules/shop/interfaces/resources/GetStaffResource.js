module.exports = class GetStaffsResource {
  static toResource(staff) {
    return {
      id: staff.id,
      role: staff.role,
      created_at: staff.created_at,
      updated_at: staff.updated_at,
      users: staff.users
        ? staff.users.map((user) => ({
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
            user_type: user.user_type,
          }))
        : [],
      shops: staff.shops
        ? staff.shops.map((shop) => ({
            id: shop.id,
            name: shop.name,
          }))
        : [],
    };
  }
  static collection(staffs) {
    return staffs.map((staff) => this.toResource(staff));
  }
};
