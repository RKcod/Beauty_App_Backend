class GetAppointmentsByShopUseCase {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute(shopId, { startDate, endDate } = {}) {
    if (!shopId) {
      const error = new Error('Shop ID is required.');
      error.statusCode = 400;
      throw error;
    }
    if (startDate && endDate) {
        // Ensure dates are valid if provided
        if (new Date(startDate) >= new Date(endDate)) {
            const error = new Error('Start date must be before end date for range query.');
            error.statusCode = 400;
            throw error;
        }
        return this.appointmentRepository.findByDateRange(shopId, new Date(startDate), new Date(endDate));
    }
    return this.appointmentRepository.findByShopId(shopId);
  }
}

module.exports = GetAppointmentsByShopUseCase;
