const Filter = require('../../../../../shared/Filter');

class NameFilter extends Filter {
  constructor(value) {
    super('name', 'like', value);
  }
}

module.exports = NameFilter;
