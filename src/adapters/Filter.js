class Filter {
    constructor(column, operator = '=', value = null) {
      this.column = column;
      this.operator = operator;
      this.value = value;
    }
  
    apply(query) {
      if (this.value !== null && this.value !== undefined) {
        query.where(this.column, this.operator, this.operator === 'like' ? `%${this.value}%` : this.value);
      }
      return query;
    }
  }
  
  module.exports = Filter;
  