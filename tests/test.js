import status from '../src/status';

describe('Status', () => {
  it('should return 200', () => {
    expect(status.http200Ok).toEqual(200);
  });

  it('should return 500', () => {
    expect(status.http500InternalServerError).toEqual(500);
  });
});
