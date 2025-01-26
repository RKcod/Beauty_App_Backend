const Filter = require('../../../../../adapters/Filter');

class UsernameFilter extends Filter {
  constructor(value) {
    super('username', 'like', value);
  }
}

module.exports = UsernameFilter;
