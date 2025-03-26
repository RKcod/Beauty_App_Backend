const GetUserResource = require("../../../user/interfaces/resources/GetAllUsersResource");
module.exports = class GetMessagesResource {
    static toResource(message) {
        return {
            id: message.id,
            content:message.content,
            attachments:message.attachments,
            created_at: message.created_at,
            updated_at: message.updated_at,
            sender: message.sender ? GetUserResource.minimal(message.sender) : null,
        };
    }

    static collection(messages) {
        return messages.map((message) => this.toResource(message));
    }
};
