const Filter = require('../../../../../shared/Filter');

class PhoneFilter extends Filter {
  constructor(value) {
    super('phone', 'like', value);
  }
}

module.exports = PhoneFilter;
