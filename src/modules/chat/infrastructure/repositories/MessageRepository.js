const MessageModel = require("../models/MessageModel");
const ConversationModel = require("../models/ConversationModel");
const Message = require("../../core/entities/Message");
const paginationProvider = require("../../../../providers/PaginationProvider");

class MessageRepository {
  static async createMessage(messageData) {
    const messageEntity = new Message(messageData);
    const message = await MessageModel.query().insertAndFetch(messageEntity);

    if (messageData.attachments.length > 0) {
      await message
        .$relatedQuery("attachments")
        .insert(messageData.attachments);
    }

    await ConversationModel.query()
      .findById(messageData.conversation_id)
      .patch({ last_message_id: message.id, updated_at: new Date() });

    return message;
  }

  static async getMessagesByConversation(
    conversationPaginateFilter,
    page,
    perPage
  ) {
    let query = ConversationModel.query()
      .withGraphFetched("messages.sender")
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

  static async findMessage(messageId) {
    return await MessageModel.query().findById(messageId);
  }

  static async deleteById(messageId) {
    return await MessageModel.query().deleteById(messageId);
  }

  static async updateById(messageId, data) {
    const existingMessage = await MessageModel.query().findById(messageId);
    if (!existingMessage) {
      throw new Error(`Message with ID ${messageId} not found`);
    }

    // Met à jour le message
    await MessageModel.query().findById(messageId).patch(data);

    return await MessageModel.query()
      .findById(messageId)
      .withGraphFetched("[sender, attachments]");
  }
}

module.exports = MessageRepository;
