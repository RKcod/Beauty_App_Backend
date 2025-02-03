const NameFilter = require('./common/NameFilter');

class RolePaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new NameFilter(queryParams.name),
    ];
  }

  applyFilters(query) {
    this.filters.forEach((filter) => {
      filter.apply(query);
    });
    return query;
  }
}

module.exports = RolePaginateFilter;
