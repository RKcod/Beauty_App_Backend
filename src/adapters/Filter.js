class Filter {
  constructor(column, operator = '=', value = null) {
    this.column = column;
    this.operator = operator.toLowerCase(); 
    this.value = value;
  }

  apply(query) {
    if (this.value !== null && this.value !== undefined) {
      if (this.operator === 'like' && this.value.length >= 2) {
        query.whereRaw(`LOWER(${this.column}) LIKE LOWER(?)`, [`%${this.value}%`]); 
      } else if (this.operator === 'ilike' && this.value.length >= 2) {
        query.where(this.column, 'ILIKE', `%${this.value}%`); 
      } else {
        query.where(this.column, this.operator, this.value);
      }
    }
    return query;
  }
}

module.exports = Filter;
