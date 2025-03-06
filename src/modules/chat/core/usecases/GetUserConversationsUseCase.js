const ConversationRepository = require("../../infrastructure/repositories/ConversationRepository");
const UserRepository = require("../../../user/infrastructure/repositories/UserRepository");
module.exports = class GetUserConversationsUseCase {
  static async getUserConversations(userId) {
    const user = await UserRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return await ConversationRepository.getUserConversations(userId);
  }
};
