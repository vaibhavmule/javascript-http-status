import Status from '../src/status';

describe('Status', () => {
  it('should return 200', () => {
    expect(Status.http200Ok).toEqual(200);
  });

  it('should return 500', () => {
    expect(Status.http500InternalServerError).toEqual(500);
  });
});
