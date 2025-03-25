const GetShopsResource = require("../../../shop/interfaces/resources/GetShopsResourse");
const GetUserResource = require("../../../user/interfaces/resources/GetAllUsersResource");
module.exports = class GetConversationsResource {
    static toResource(conversation) {
        return {
            id: conversation.id,
            created_at: conversation.created_at,
            updated_at: conversation.updated_at,
            shop: conversation.shop ? GetShopsResource.minimal(conversation.shop) : null,
            user1: conversation.user1 ? GetUserResource.minimal(conversation.user1) : null,
            user2: conversation.user2 ? GetUserResource.minimal(conversation.user2) : null
        };
    }

    static collection(conversations) {
        return conversations.map((conversation) => this.toResource(conversation));
    }
};
