'use strict';

var expect = require('chai').expect;
var hello = require('./hello');

describe('run hello.js', function() {
  it('should return "Hello Bioch"', function() {
    expect(hello()).to.equal('Hello Bioch');
  });
});
