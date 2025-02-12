const PaginationProvider = {
  async paginate(query, page = 1, perPage = 15) {
    console.log('recent page', page, perPage)
    const totalResult = await query
      .clone()
      .clearSelect()
      .count({ total: "*" })
      .first();
    const total = totalResult ? parseInt(totalResult.total, 10) : 0;

    const totalPages = Math.ceil(total / perPage);

    if (page > totalPages) {
      return {
        data: [],
        pagination: {
          total,
          perPage,
          currentPage: parseInt(page, 10),
          totalPages,
        },
      };
    }

    const offset = (page - 1) * perPage;
    const paginatedData = await query.limit(perPage).offset(offset);

    return {
      data: paginatedData,
      pagination: {
        total,
        perPage,
        currentPage: parseInt(page, 10),
        totalPages,
      },
    };
  },
};

module.exports = PaginationProvider;
