// module.exports = class GetStaffsResource {
//   static toResource(staff) {
//     console.log('top',staff); // Ajoute ce log pour vérifier la structure des données
//     return {
//       id: staff.id,
//       role: staff.role,
//       name: staff.name,
//       email: staff.email,
//       address: staff.address,
//       city: staff.city,
//       phone: staff.phone,
//       image: staff.image,
//       activity_domain: staff.activity_domain,
//       created_at: staff.created_at,
//       updated_at: staff.update_at,
//       user_id: staff.user.id,
//       shop_id: staff.shop_id,
//       shops: staff.shop
//         ? {
//             id: staff.shop.id,
//             name: staff.shop.name,
//             users: shop.users
//             ? shop.users.map((user) => ({
//                 id: user.id,
//                 username: user.username,
//                 email: user.email,
//                 phone: user.phone,
//                 user_type: user.user_type,
//               }))
//             : [],
//           }
//         : null,
//     };
//   }

//   static collection(staffs) {
//     return staffs.map((staff) => this.toResource(staff));
//   }
// };

module.exports = class GetStaffsResource {
  static toResource(staff) {
    console.log("top", staff); // Ajoute ce log pour vérifier la structure des données

    return {
      id: staff.id,
      role: staff.role,
      name: staff.name,
      email: staff.email,
      address: staff.address,
      city: staff.city,
      phone: staff.phone,
      image: staff.image,
      activity_domain: staff.activity_domain,
      created_at: staff.created_at,
      updated_at: staff.updated_at, // Corrige ici : 'update_at' -> 'updated_at'
      user_id: staff.user ? staff.user.id : null, // Vérifie si 'user' existe
      shop_id: staff.shop_id,
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
