import { expect } from 'chai';
import Status from '../src/index.js';

describe("Status", () => {
  it("should return 200", function () {
    expect(Status.http200Ok).to.equal(200);
  });

  it("should return 500", function () {
    expect(Status.http500InternalServerError).to.equal(500);
  });
});
