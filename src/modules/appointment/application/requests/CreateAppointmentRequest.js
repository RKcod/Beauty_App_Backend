class CreateAppointmentRequest {
  constructor(data) {
    this.userId = data.userId;
    this.shopId = data.shopId;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.status = data.status || 'scheduled'; // Default status

    this.validate();
  }

  validate() {
    if (!this.userId || !this.shopId || !this.startTime || !this.endTime) {
      throw new Error('User ID, Shop ID, start time, and end time are required.');
      // In a real app, use a more structured validation error
    }
    if (new Date(this.startTime) >= new Date(this.endTime)) {
      throw new Error('Start time must be before end time.');
    }
    // Add more validation rules as needed (e.g., data types, formats)
  }

  toDataObject() {
    return {
      userId: this.userId,
      shopId: this.shopId,
      startTime: this.startTime,
      endTime: this.endTime,
      status: this.status,
    };
  }
}

module.exports = CreateAppointmentRequest;
