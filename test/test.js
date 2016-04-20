import { expect } from 'chai';
import Status from '../src/index.js';

describe("Status", () => {
  it("should return 200", () => {
    expect(Status.http200Ok).to.equal(200);
  });

  it("should return 500", () => {
    expect(Status.http500InternalServerError).to.equal(500);
  });
});
