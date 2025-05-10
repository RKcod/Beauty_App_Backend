const NameFilter = require("./common/NameFilter");
const PhoneFilter = require("./common/PhoneFilter");
const RoleFilter = require("./common/RoleFilter");

class ShopPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new NameFilter(queryParams.name),
      new PhoneFilter(queryParams.phone),
      new RoleFilter(queryParams.role),
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
