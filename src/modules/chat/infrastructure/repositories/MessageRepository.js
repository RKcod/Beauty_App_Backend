const MessageModel = require("../models/MessageModel");
const ConversationModel = require("../models/ConversationModel");
const Message = require("../../core/entities/Message");
const paginationProvider = require("../../../../providers/PaginationProvider");

class MessageRepository {
  static async createMessage(messageData) {
    console.log('my data', messageData)
    const messageEntity = new Message(messageData);
    const message = await MessageModel.query().insertAndFetch(messageEntity);

    if (messageData.attachments.length > 0) {
      await message.$relatedQuery("attachments").insert(messageData.attachments);
    }

    await ConversationModel.query()
      .findById(messageData.conversation_id)
      .patch({ last_message_id: message.id, updated_at: new Date() });

    return message;
  }

  static async getMessagesByConversation(conversationPaginateFilter, page, perPage) {
    let query = MessageModel.query()
      .withGraphFetched("sender")
      .orderBy("created_at", "desc");

    query = conversationPaginateFilter.applyFilters(query);

    return paginationProvider.paginate(query, page, perPage);
  }

  static async markMessagesAsRead(conversationId, userId) {
    return MessageModel.query()
      .where("conversation_id", conversationId)
      .whereNot("sender_id", userId)
      .patch({ is_read: true, updated_at: new Date() });
  }
}

module.exports = MessageRepository;
