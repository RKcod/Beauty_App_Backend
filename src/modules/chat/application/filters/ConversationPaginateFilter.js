const ConversationIdFilter = require('./common/ConversationIdFilter');
const ShopIdFilter = require('./common/ShopIdFilter');
const MessageContentFilter = require('./common/MessageContentFilter');
const UserIdFilter = require('./common/UserIdFilter');

class ConversationPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new ConversationIdFilter(queryParams.conversation_id),
      new ShopIdFilter(queryParams.shop_id),
      new MessageContentFilter(queryParams.content),
      new UserIdFilter(queryParams.user_id),
    ];
  }

  applyFilters(query) {
    this.filters.forEach((filter) => filter.apply(query));
    return query;
  }
}

module.exports = ConversationPaginateFilter;
