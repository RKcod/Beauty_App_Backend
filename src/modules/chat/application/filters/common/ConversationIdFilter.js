module.exports = class ConversationIdFilter {
    constructor(conversationId) {
      this.conversationId = conversationId;
    }
  
    apply(query) {
      if (this.conversationId) {
        query.where("id", this.conversationId);
      }
    }
  };
  