const Filter = require('../../../../../shared/Filter');

class UserNameFilter extends Filter {
  constructor(value) {
    super('users.name', 'like', value);
  }
}

module.exports = UserNameFilter;
