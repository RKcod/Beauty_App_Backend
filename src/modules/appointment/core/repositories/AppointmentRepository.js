class AppointmentRepository {
  /**
   * Creates a new appointment.
   * @param {object} appointmentData - The data for the new appointment.
   * @returns {Promise<Appointment>} The created appointment.
   */
  async create(appointmentData) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Finds an appointment by its ID.
   * @param {number} appointmentId - The ID of the appointment.
   * @returns {Promise<Appointment|null>} The appointment or null if not found.
   */
  async findById(appointmentId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Finds appointments by user ID.
   * @param {number} userId - The ID of the user.
   * @returns {Promise<Appointment[]>} A list of appointments.
   */
  async findByUserId(userId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Finds appointments by shop ID.
   * @param {number} shopId - The ID of the shop.
   * @returns {Promise<Appointment[]>} A list of appointments.
   */
  async findByShopId(shopId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Finds appointments by shop ID within a given date range.
   * @param {number} shopId - The ID of the shop.
   * @param {Date} startDate - The start of the date range.
   * @param {Date} endDate - The end of the date range.
   * @returns {Promise<Appointment[]>} A list of appointments.
   */
  async findByDateRange(shopId, startDate, endDate) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Updates an appointment.
   * @param {number} appointmentId - The ID of the appointment to update.
   * @param {object} updateData - The data to update.
   * @returns {Promise<Appointment|null>} The updated appointment or null if not found.
   */
  async update(appointmentId, updateData) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  /**
   * Deletes an appointment by its ID.
   * @param {number} appointmentId - The ID of the appointment to delete.
   * @returns {Promise<boolean>} True if deleted, false otherwise.
   */
  async delete(appointmentId) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = AppointmentRepository;
