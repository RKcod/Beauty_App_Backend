class Message {
  constructor({
    conversation_id,
    sender_id,
    content,
    is_read = false,
    created_at = new Date(),
    updated_at = new Date(),
    attachments = [],
  }) {
    this.conversation_id = conversation_id;
    this.sender_id = sender_id;
    this.content = content;
    this.is_read = is_read;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.attachments = attachments;

    this.validate();
  }

  validate() {
    if (!this.conversation_id) {
      throw new Error("Conversation ID is required.");
    }
    if (!this.sender_id) {
      throw new Error("Sender ID is required.");
    }
    if (!this.content && this.attachments.length === 0) {
      throw new Error("Message must contain text or at least one attachment.");
    }
  }
}

module.exports = Message;
