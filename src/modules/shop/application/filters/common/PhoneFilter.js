const Filter = require('../../../../../adapters/Filter');

class PhoneFilter extends Filter {
  constructor(value) {
    super('phone', 'like', value);
  }
}

module.exports = PhoneFilter;
