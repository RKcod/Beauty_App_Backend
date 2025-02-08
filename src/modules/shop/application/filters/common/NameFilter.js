const Filter = require('../../../../../adapters/Filter');

class NameFilter extends Filter {
  constructor(value) {
    super('name', 'like', value);
  }
}

module.exports = NameFilter;
