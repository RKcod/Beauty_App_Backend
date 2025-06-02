const CreateAppointmentUseCase = require('../CreateAppointmentUseCase');
const Appointment = require('../../../core/entities/Appointment');

// Mock the AppointmentRepository
const mockAppointmentRepository = {
  create: jest.fn(),
  findById: jest.fn(),
  findByDateRange: jest.fn(), // Add if CreateAppointmentUseCase uses it for conflict checking
};

describe('CreateAppointmentUseCase', () => {
  let createAppointmentUseCase;

  beforeEach(() => {
    // Reset mocks before each test
    mockAppointmentRepository.create.mockReset();
    mockAppointmentRepository.findByDateRange.mockReset();
    createAppointmentUseCase = new CreateAppointmentUseCase(mockAppointmentRepository);
  });

  it('should create an appointment successfully', async () => {
    const appointmentData = {
      userId: 1,
      shopId: 1,
      startTime: '2024-01-01T10:00:00.000Z',
      endTime: '2024-01-01T11:00:00.000Z',
      status: 'scheduled',
    };
    const expectedAppointment = new Appointment({ ...appointmentData, id: 1, createdAt: new Date(), updatedAt: new Date() });
    mockAppointmentRepository.create.mockResolvedValue(expectedAppointment);
    // If conflict checking is active in use case:
    // mockAppointmentRepository.findByDateRange.mockResolvedValue([]);


    const result = await createAppointmentUseCase.execute(appointmentData);

    expect(mockAppointmentRepository.create).toHaveBeenCalledWith(appointmentData);
    expect(result).toEqual(expectedAppointment);
  });

  it('should throw an error if required fields are missing', async () => {
    const appointmentData = {
      userId: 1,
      // shopId is missing
      startTime: '2024-01-01T10:00:00.000Z',
      endTime: '2024-01-01T11:00:00.000Z',
    };

    await expect(createAppointmentUseCase.execute(appointmentData)).rejects.toThrow(
      'User ID, Shop ID, start time, and end time are required to create an appointment.'
    );
    expect(mockAppointmentRepository.create).not.toHaveBeenCalled();
  });

  // Add more tests:
  // - Test for appointment conflicts if that logic is enabled in the use case
  // - Test for other validation rules if added
});
