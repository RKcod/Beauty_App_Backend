class Conversation {
    constructor({ user1_id, user2_id, shop_id = null, created_at = null, updated_at = null }) {
      this.user1_id = user1_id;
      this.user2_id = user2_id;
      this.shop_id = shop_id;
      this.created_at = created_at || new Date();
      this.updated_at = updated_at || new Date();
  
      this.validate();
    }
  
    validate() {
      if (!this.user1_id || !this.user2_id) {
        throw new Error("user1_id and user2_id are required.");
      }
  
      if (this.user1_id === this.user2_id) {
        throw new Error("A user cannot have a conversation with themselves.");
      }
    }
  }
  
  module.exports = Conversation;
  