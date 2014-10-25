'use strict';

describe('Directive: partition', function () {

  // load the directive's module
  beforeEach(module('movieMemoryApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<partition></partition>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the partition directive');
  }));
});
