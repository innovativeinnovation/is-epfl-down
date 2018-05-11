/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

require('chai').should();
var rewire = require('rewire');

var isEpflDown = rewire('../src/index.js');

describe('is-epfl-down module', function () {
  var write = '';
  var log = '';

  this.timeout(15000);

  // restore process.stdout.write() and console.log() to their previous glory
  var cleanup = function () {
    process.stdout.write = write;
    console.log = log;
  };

  beforeEach(function () {
    // store these functions to restore later because we are messing with them
    write = process.stdout.write;
    log = console.log;

    process.stdout.write = console.log = function (s) { /* quiet */ };
  });

  // restore after each test
  afterEach(cleanup);

  it('should return false for www.epfl.ch', function () {
    return isEpflDown(['www']).then(function (isDown) {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return false for memento.epfl.ch', function () {
    return isEpflDown(['https://memento.epfl.ch']).then(function (isDown) {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return false for actu.epfl.ch', function () {
    return isEpflDown(['actu'], {timeout: 4000}).then(function (isDown) {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return true for unicorn.epfl.ch', function () {
    return isEpflDown(['unicorn']).then(function (isDown) {
      isDown.should.equal(true);
      cleanup();
    });
  });

  it('should throw an exception with an object in parameter', function () {
    return isEpflDown({}).then(function () {
    }).catch(function (err) {
      err.message.should.equal('Expected an array');
      cleanup();
    });
  });
});
