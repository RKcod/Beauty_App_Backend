const UsernameFilter = require('./common/UsernameFilter');
const PhoneFilter = require('./common/PhoneFilter');

class UserPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new UsernameFilter(queryParams.username),
      new PhoneFilter(queryParams.phone),
    ];
  }

  applyFilters(query) {
    this.filters.forEach((filter) => {
      filter.apply(query);
    });
    return query;
  }
}

module.exports = UserPaginateFilter;
