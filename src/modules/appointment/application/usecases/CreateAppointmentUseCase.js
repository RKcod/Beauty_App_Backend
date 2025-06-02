const Appointment = require('../../core/entities/Appointment');

class CreateAppointmentUseCase {
  constructor(appointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  async execute(appointmentData) {
    // Basic validation (more advanced validation can be in a dedicated Request class or service)
    if (!appointmentData.userId || !appointmentData.shopId || !appointmentData.startTime || !appointmentData.endTime) {
      const error = new Error('User ID, Shop ID, start time, and end time are required to create an appointment.');
      error.statusCode = 400; // Bad Request
      throw error;
    }

    // Additional business logic could go here, e.g., checking for overlapping appointments for the user or shop
    // For example, check if shopId, startTime, endTime results in conflicts.
    // const existingAppointments = await this.appointmentRepository.findByDateRange(appointmentData.shopId, new Date(appointmentData.startTime), new Date(appointmentData.endTime));
    // if (existingAppointments.length > 0) {
    //   // Handle conflict logic, perhaps check for specific overlaps
    //   const error = new Error('Appointment conflicts with existing appointments.');
    //   error.statusCode = 409; // Conflict
    //   throw error;
    // }

    const appointment = await this.appointmentRepository.create(appointmentData);
    return appointment;
  }
}

module.exports = CreateAppointmentUseCase;
