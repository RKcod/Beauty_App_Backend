const { deleteById } = require("../../../user/infrastructure/repositories/UserRepository");
const ConversationModel = require("../models/ConversationModel");

class ConversationRepository {
 
  static async createOrGetConversation(user1_id, user2_id, shop_id = null) {
    let conversation = await ConversationModel.query()
      .where({ user1_id, user2_id, shop_id })
      .orWhere({ user1_id: user2_id, user2_id: user1_id, shop_id })
      .first();

    if (!conversation) {
      conversation = await ConversationModel.query().insertAndFetch({
        user1_id,
        user2_id,
        shop_id,
        last_message_id: null,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    return conversation;
  }


  static async create(conversationEntity) {
    return await ConversationModel.query().insertAndFetch(conversationEntity);
  }
  

 
  static async getUserConversations(userId) {
    return ConversationModel.query()
      .where("user1_id", userId)
      .orWhere("user2_id", userId)
      .withGraphFetched("[shop, lastMessage, user1, user2]")
      .orderBy("updated_at", "desc");
  }


  static async getConversationById(conversationId) {
    return ConversationModel.query()
      .findById(conversationId)
      .withGraphFetched("[shop, messages.sender]");
  }

  static async deleteById(conversationId){
    return await ConversationModel.query().deleteById(conversationId);
  }

  static async findConversationById(conversationId){
    return await ConversationModel.query().findById(conversationId);
  }
}

module.exports = ConversationRepository;
