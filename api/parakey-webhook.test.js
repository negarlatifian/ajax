const handler = require('./parakey-webhook');

test('Should respond with 200 OK for door_unlocked event', async () => {
  const req = {
    method: 'POST',
    body: { event: 'door_unlocked' },
  };
  const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };

  await handler(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.send).toHaveBeenCalledWith('OK');
});

// Additional tests...
