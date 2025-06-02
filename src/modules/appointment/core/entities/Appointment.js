class Appointment {
  constructor({ id, userId, shopId, startTime, endTime, status, createdAt, updatedAt }) {
    this.id = id;
    this.userId = userId;
    this.shopId = shopId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  // Example method: Check if the appointment is in the past
  isPast() {
    return new Date(this.endTime) < new Date();
  }

  // Example method: Get duration in minutes
  getDurationInMinutes() {
    if (!this.startTime || !this.endTime) {
      return 0;
    }
    const start = new Date(this.startTime);
    const end = new Date(this.endTime);
    return (end.getTime() - start.getTime()) / (1000 * 60);
  }
}

module.exports = Appointment;
