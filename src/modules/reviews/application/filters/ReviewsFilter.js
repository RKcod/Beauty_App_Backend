const commentFilter = require("./common/CommentFilter");
const ratingFilter = require("./common/RatingFilter");


class ReviewPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new commentFilter(queryParams.name),
      new ratingFilter(queryParams.phone),
    ];
  }

  applyFilters(query) {
    this.filters.forEach((filter) => {
      filter.apply(query);
    });
    return query;
  }
}

module.exports = ReviewPaginateFilter;
