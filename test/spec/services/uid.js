'use strict';

describe('Service: uid', function () {

  // load the service's module
  beforeEach(module('movieMemoryApp'));

  // instantiate service
  var uid;
  beforeEach(inject(function (_uid_) {
    uid = _uid_;
  }));

  it('should do something', function () {
    expect(!!uid).toBe(true);
  });

});
