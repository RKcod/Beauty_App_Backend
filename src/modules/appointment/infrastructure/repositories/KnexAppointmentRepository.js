const knex = require('../../../../knexInstance'); // Adjust path if knexInstance is located elsewhere
const Appointment = require('../../core/entities/Appointment');
const AppointmentRepository = require('../../core/repositories/AppointmentRepository');

const TABLE_NAME = 'appointments';

class KnexAppointmentRepository extends AppointmentRepository {
  constructor() {
    super();
  }

  _mapToEntity(row) {
    if (!row) return null;
    return new Appointment({
      id: row.id,
      userId: row.user_id,
      shopId: row.shop_id,
      startTime: row.start_time,
      endTime: row.end_time,
      status: row.status,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    });
  }

  _mapToDb(data) {
    const dbData = {};
    if (data.userId !== undefined) dbData.user_id = data.userId;
    if (data.shopId !== undefined) dbData.shop_id = data.shopId;
    if (data.startTime !== undefined) dbData.start_time = data.startTime;
    if (data.endTime !== undefined) dbData.end_time = data.endTime;
    if (data.status !== undefined) dbData.status = data.status;
    // created_at and updated_at are handled by timestamps(true, true)
    return dbData;
  }

  async create(appointmentData) {
    const dbData = this._mapToDb(appointmentData);
    // Ensure essential fields are present if your DB schema requires them (not enforced by _mapToDb)
    // For example: user_id, shop_id, start_time, end_time are notNullable in the migration.
    if (!dbData.user_id || !dbData.shop_id || !dbData.start_time || !dbData.end_time) {
        throw new Error('Missing required fields for appointment creation.');
    }

    const [result] = await knex(TABLE_NAME).insert(dbData).returning('*');
    return this._mapToEntity(result);
  }

  async findById(appointmentId) {
    const row = await knex(TABLE_NAME).where({ id: appointmentId }).first();
    return this._mapToEntity(row);
  }

  async findByUserId(userId) {
    const rows = await knex(TABLE_NAME).where({ user_id: userId });
    return rows.map(this._mapToEntity);
  }

  async findByShopId(shopId) {
    const rows = await knex(TABLE_NAME).where({ shop_id: shopId });
    return rows.map(this._mapToEntity);
  }

  async findByDateRange(shopId, startDate, endDate) {
    const rows = await knex(TABLE_NAME)
      .where({ shop_id: shopId })
      .andWhere('start_time', '<', endDate) // Appointments that start before the range ends
      .andWhere('end_time', '>', startDate); // Appointments that end after the range starts
    return rows.map(this._mapToEntity);
  }

  async update(appointmentId, updateData) {
    const dbData = this._mapToDb(updateData);
    if (Object.keys(dbData).length === 0) {
        return this.findById(appointmentId); // No fields to update
    }
    // Add updated_at manually if not using knex's automatic update
    // dbData.updated_at = new Date();
    // However, timestamps(true,true) in migration should handle this for supported DBs (like PG)

    const [result] = await knex(TABLE_NAME)
      .where({ id: appointmentId })
      .update(dbData)
      .returning('*');
    return this._mapToEntity(result);
  }

  async delete(appointmentId) {
    const count = await knex(TABLE_NAME).where({ id: appointmentId }).del();
    return count > 0;
  }
}

module.exports = KnexAppointmentRepository;
