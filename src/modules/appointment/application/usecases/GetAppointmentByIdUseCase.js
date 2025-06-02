class GetAppointmentByIdUseCase {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute(appointmentId) {
    if (!appointmentId) {
      const error = new Error('Appointment ID is required.');
      error.statusCode = 400;
      throw error;
    }
    const appointment = await this.appointmentRepository.findById(appointmentId);
    if (!appointment) {
      const error = new Error('Appointment not found.');
      error.statusCode = 404; // Not Found
      throw error;
    }
    return appointment;
  }
}

module.exports = GetAppointmentByIdUseCase;
