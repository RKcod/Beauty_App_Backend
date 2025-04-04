const commentFilter = require("./common/CommentFilter");
const ratingFilter = require("./common/RatingFilter");
const userNameFilter = require("./common/UserNameFilter");
const shopNameFilter = require("./common/ShopNameFilter");



class ReviewPaginateFilter {
  constructor(queryParams) {
    this.filters = [
      new commentFilter(queryParams.comment),
      new ratingFilter(queryParams.rating),
      new userNameFilter(queryParams.name),    // Filtre sur le nom de l'utilisateur
      new shopNameFilter(queryParams.shop_name),
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
