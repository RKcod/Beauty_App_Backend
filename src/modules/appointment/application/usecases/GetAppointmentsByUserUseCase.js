class GetAppointmentsByUserUseCase {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute(userId) {
    if (!userId) {
      const error = new Error('User ID is required.');
      error.statusCode = 400;
      throw error;
    }
    return this.appointmentRepository.findByUserId(userId);
  }
}

module.exports = GetAppointmentsByUserUseCase;
