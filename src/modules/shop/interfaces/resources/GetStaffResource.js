module.exports = class GetStaffsResource {
  static toResource(staff) {
    console.log('top',staff); // Ajoute ce log pour vérifier la structure des données
    return {
      id: staff.id,
      role: staff.role,
      created_at: staff.created_at,
      updated_at: staff.update_at,
      user_id: staff.user_id,
      shop_id: staff.shop_id,

      users: staff.user
        ? {
            id: staff.user.id,
            username: staff.user.username,
            email: staff.user.email,
            phone: staff.user.phone,
            user_type: staff.user.user_type,
          }
        : null,
      shops: staff.shop
        ? {
            id: staff.shop.id,
            name: staff.shop.name,
          }
        : null,
    };
  }
  
  static collection(staffs) {
    return staffs.map((staff) => this.toResource(staff));
  }
};
