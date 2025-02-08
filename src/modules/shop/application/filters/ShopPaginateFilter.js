const NameFilter = require('./common/NameFilter');
const PhoneFilter = require('./common/PhoneFilter');

class ShopPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new NameFilter(queryParams.name),
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

module.exports = ShopPaginateFilter;
