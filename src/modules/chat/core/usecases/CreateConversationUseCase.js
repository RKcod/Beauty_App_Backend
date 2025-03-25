const ConversationRepository = require("../../infrastructure/repositories/ConversationRepository");
const ShopRepository = require("../../../shop/infrastructure/repositories/shopRepository");
const UserRepository = require("../../../user/infrastructure/repositories/UserRepository");
const Conversation = require("../entities/Conversation");
const ConversationModel = require("../../infrastructure/models/ConversationModel");
const WebSocketService = require("../../../../shared/WebSocketService");

module.exports = class CreateConversationUseCase {
  static async createConversation(userId, shopId) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const shop = await ShopRepository.findById(shopId);
    if (!shop) {
      throw new Error("Shop not found");
    }

    let [firstUser, secondUser] =
    userId < shop.owner_id ? [userId, shop.owner_id] : [shop.owner_id, userId];

    const existingConversation = await ConversationModel.query()
      .where({ user1_id: firstUser, user2_id: secondUser, shop_id:shopId })
      .first();

    if(existingConversation){
       throw new Error("This conversation already exist");
    }

    const conversationEntity = new Conversation({
      user1_id: userId,
      user2_id: shop.owner_id,
      shop_id: shopId,
    });

    const conversation = await ConversationRepository.create(
      conversationEntity
    );

    WebSocketService.emitToConversation(
      conversation.id,
      "newConversation",
      conversation
    );

    return conversation;
  }
};
