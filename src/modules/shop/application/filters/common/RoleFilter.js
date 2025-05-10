const Filter = require("../../../../../shared/Filter");

class NameFilter extends Filter {
  constructor(value) {
    super("role", "like", value);
  }
}

module.exports = NameFilter;
