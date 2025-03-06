const ConversationRepository = require("../../infrastructure/repositories/ConversationRepository");
const ShopRepository = require("../../../shop/infrastructure/repositories/ShopRepository");
const UserRepository = require("../../../user/infrastructure/repositories/UserRepository");
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

    const conversation = await ConversationRepository.createOrGetConversation(userId, shop.owner_id, shopId);

    WebSocketService.emitToConversation(conversation.id, "newConversation", conversation);

    return conversation;
  }
};
