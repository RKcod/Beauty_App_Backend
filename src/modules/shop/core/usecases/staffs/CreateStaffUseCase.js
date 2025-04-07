// const staffRepository = require("../../../infrastructure/repositories/StaffRepository");
// const shopRepository = require("../../../infrastructure/repositories/ShopRepository");
// const userRepository = require("../../../../user/infrastructure/repositories/UserRepository");
// const StaffEntitie = require("../../entities/Staff");
// const PasswordService = require("../../../../user/infrastructure/services/PasswordService");
// const Helpers = require("../../../../../shared/Helpers");

// module.exports = class CreateStaffUseCase {
//   static async createStaff(staffData) {
//     const { email, phone, name } = staffData;
//     const user = await userRepository.findByEmail(email);
//     if (user) {
//       throw new Error("This User already exists");
//     }
//     const userPassword = await PasswordService.generateTemporaryPassword();
//     let userPasswordHash = await PasswordService.hashPassword(userPassword);
//     const userCreated = await userRepository.create({
//       email: email,
//       password: userPasswordHash,
//       username: name,
//       phone: phone,
//     });

//     if (userCreated) {
//       await Helpers.sendMail(
//         userCreated[0],
//         "User Creation for a shop",
//         "register"
//       );
//     }
//     const shopId = await shopRepository.findById(staffData.shop_id);
//     if (!shopId) {
//       throw new Error("this shop id does exist");
//     }
//     // const staffChecked = await staffRepository.findByEmail(email);

//     // if (staffChecked) {
//     //   throw new Error("This Shop already exists");
//     // }
//     const staffFormated = new StaffEntitie(staffData);

//     return await staffRepository.create(staffFormated);
//   }
// };

const staffRepository = require("../../../infrastructure/repositories/StaffRepository");
const shopRepository = require("../../../infrastructure/repositories/ShopRepository");
const userRepository = require("../../../../user/infrastructure/repositories/UserRepository");
const StaffEntitie = require("../../entities/Staff");
const PasswordService = require("../../../../user/infrastructure/services/PasswordService");
const Helpers = require("../../../../../shared/Helpers");

module.exports = class CreateStaffUseCase {
  static async createStaff(staffData) {
    const { email, phone, name, shop_id } = staffData;

    // Vérifier si l'utilisateur existe déjà
    const user = await userRepository.findByEmail(email);
    if (user) {
      throw new Error("This User already exists");
    }

    // Générer un mot de passe temporaire pour l'utilisateur
    const userPassword = await PasswordService.generateTemporaryPassword();
    const userPasswordHash = await PasswordService.hashPassword(userPassword);

    // Créer l'utilisateur
    const userCreated = await userRepository.create({
      email: email,
      password: userPasswordHash,
      username: name,
      phone: phone,
    });

    if (userCreated) {
      // Envoyer l'email de confirmation
      await Helpers.sendMail(userCreated[0], "User Creation for a shop", "register");
    }

    // Vérifier si le shop existe
    const shop = await shopRepository.findById(shop_id);
    if (!shop) {
      throw new Error("This shop ID does not exist");
    }

    // Créer l'objet staff sans utiliser user_id
    const staffDataFormatted = {
      ...staffData,  // Conserver les autres données comme l'activité, l'adresse, etc.
      // Assurez-vous de ne pas inclure user_id ici
    };

    // Créer le staff dans la base de données
    const staffCreated = await staffRepository.create(new StaffEntitie(staffDataFormatted));
    return staffCreated;
  }
};
