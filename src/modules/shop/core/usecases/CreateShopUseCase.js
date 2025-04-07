
const Helpers = require("../../../../shared/Helpers");
const UserRepository = require("../../../user/infrastructure/repositories/UserRepository");
const PasswordService = require("../../../user/infrastructure/services/PasswordService");
const ShopRepository = require("../../infrastructure/repositories/ShopRepository");
const Shop = require("../entities/Shop");
const path = require("path");
const fs = require("fs");

module.exports = class CreateShopUseCase {
  static async createShop(shopData) {
    const { email, phone, name } = shopData;
    const user = await UserRepository.findByEmail(email);

    if (user) {
      throw new Error("This User already exists");
    }
    const userPassword = await PasswordService.generateTemporaryPassword();
    let userPasswordHash = await PasswordService.hashPassword(userPassword);
    const userCreated = await UserRepository.create({
      email: email,
      password: userPasswordHash,
      username: name,
      phone: phone,
    });

    if (userCreated) {
      await Helpers.sendMail(
        userCreated[0],
        "User Creation for a shop",
        "register"
      );
    }
     // Déterminer l’image à utiliser (upload ou image par défaut)
     const shop = new Shop({
      ...shopData,
      owner_id: userCreated[0].id,
      image: shopData.image
    });

    shop.owner_id = userCreated[0].id;

    const shopChecked = await ShopRepository.findByEmail(email);

    if (shopChecked) {
      throw new Error("This Shop already exists");
    }

    return await ShopRepository.create(shop);
  }
};
