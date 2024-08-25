const request = require('supertest');
const app = require('../app');

describe('Event API', () => {
  it('should create a new event', async () => {
    const res = await request(app)
      .post('/api/events')
      .send({
        eventName: 'New Event',
        eventType: 'single',
        startDate: '2024-09-01',
        endDate: '2024-09-05',
        eventLogoUrl: 'http://example.com/logo.png',
        eventHead: 'John Doe',
        contactNumber: '1234567890',
        contactEmail: 'johndoe@example.com',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });
});
