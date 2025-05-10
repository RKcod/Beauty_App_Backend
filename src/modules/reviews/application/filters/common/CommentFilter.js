const Filter = require('../../../../../shared/Filter');

class CommentFilter extends Filter {
  constructor(value) {
    super('comment', 'like', value);
  }
}

module.exports = CommentFilter;
