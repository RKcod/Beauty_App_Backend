const Filter = require('../../../../../shared/Filter');

class ShopNameFilter extends Filter {
  constructor(value) {
    super('shops.name', 'like', value);
  }
}

module.exports = ShopNameFilter;
