const Filter = require('../../../../../shared/Filter');

class RatingFilter extends Filter {
  constructor(value) {
    super('rating', 'like', value);
  }
}

module.exports = RatingFilter;
