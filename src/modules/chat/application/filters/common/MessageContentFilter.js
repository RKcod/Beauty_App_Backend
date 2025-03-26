const { raw } = require("objection");

module.exports = class MessageContentFilter {
  constructor(content) {
    this.content = content;
  }

  apply(query) {
    if (this.content) {
      query.whereExists(
        raw(`
          SELECT 1 FROM messages 
          WHERE messages.conversation_id = conversations.id 
          AND messages.content ILIKE ?
        `),
        [`%${this.content}%`]
      );
    }
  }
};
