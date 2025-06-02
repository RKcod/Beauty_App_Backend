const UpdateAppointmentStatusUseCase = require('./UpdateAppointmentStatusUseCase');

class CancelAppointmentUseCase {
  constructor(appointmentRepository) {
    // This use case can internally use UpdateAppointmentStatusUseCase or directly call repository
    this.updateAppointmentStatusUseCase = new UpdateAppointmentStatusUseCase(appointmentRepository);
    this.appointmentRepository = appointmentRepository; // Keep for potential direct access or specific logic
  }

  async execute(appointmentId, cancellationReason = null) { // Added optional reason
    if (!appointmentId) {
      const error = new Error('Appointment ID is required for cancellation.');
      error.statusCode = 400;
      throw error;
    }

    // Cancellation-specific logic here:
    // e.g., check if appointment can be cancelled (not too late, etc.)
    // const appointment = await this.appointmentRepository.findById(appointmentId);
    // if (appointment && appointment.status === 'completed') {
    //   const error = new Error('Cannot cancel a completed appointment.');
    //   error.statusCode = 400;
    //   throw error;
    // }

    // Log cancellationReason if provided
    if (cancellationReason) {
        console.log(`Appointment ${appointmentId} cancelled. Reason: ${cancellationReason}`);
    }

    return this.updateAppointmentStatusUseCase.execute(appointmentId, 'cancelled');
  }
}

module.exports = CancelAppointmentUseCase;
