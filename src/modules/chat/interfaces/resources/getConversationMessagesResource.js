const GetMessageResource = require("../../../chat/interfaces/resources/getMessagesResource");
module.exports = class GetConversationMessagesResource {
    static toResource(conversation) {
        return {
            id: conversation.id,
            last_message_id:conversation.last_message_id,
            created_at: conversation.created_at,
            updated_at: conversation.updated_at,
            messages: conversation.messages ? GetMessageResource.collection(conversation.messages) : null,
        };
    }

    static collection(conversations) {
        return conversations.map((conversation) => this.toResource(conversation));
    }
};
