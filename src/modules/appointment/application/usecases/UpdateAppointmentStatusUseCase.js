class UpdateAppointmentStatusUseCase {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute(appointmentId, status) {
    if (!appointmentId || !status) {
      const error = new Error('Appointment ID and status are required.');
      error.statusCode = 400;
      throw error;
    }

    // Optional: Add validation for allowed status values
    const allowedStatuses = ['scheduled', 'confirmed', 'cancelled', 'completed', 'noshow'];
    if (!allowedStatuses.includes(status)) {
        const error = new Error(`Invalid status. Allowed statuses are: ${allowedStatuses.join(', ')}`);
        error.statusCode = 400;
        throw error;
    }

    const appointment = await this.appointmentRepository.findById(appointmentId);
    if (!appointment) {
      const error = new Error('Appointment not found.');
      error.statusCode = 404;
      throw error;
    }

    // Add any specific business logic before updating status if needed
    // For example, preventing cancellation if too close to appointment time.

    return this.appointmentRepository.update(appointmentId, { status });
  }
}

module.exports = UpdateAppointmentStatusUseCase;
