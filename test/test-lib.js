/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2023.
 * See the LICENSE file for more details.
 */

require('chai').should();
const rewire = require('rewire');

const isEpflDown = rewire('../src/index.js');

describe('is-epfl-down module', function () {
  let write = '';
  let log = '';

  this.timeout(15000);

  // restore process.stdout.write() and console.log() to their previous glory
  const cleanup = () => {
    process.stdout.write = write;
    console.log = log;
  };

  beforeEach(() => {
    // store these functions to restore later because we are messing with them
    write = process.stdout.write;
    log = console.log;

    process.stdout.write = console.log = (s) => { /* quiet */ };
  });

  // restore after each test
  afterEach(cleanup);

  it('should return false for www.epfl.ch', () => {
    return isEpflDown(['www']).then((isDown) => {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return false for memento.epfl.ch', () => {
    return isEpflDown(['https://memento.epfl.ch']).then((isDown) => {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return false for actu.epfl.ch', () => {
    return isEpflDown(['actu'], { timeout: 4000 }).then((isDown) => {
      isDown.should.equal(false);
      cleanup();
    });
  });

  it('should return true for unicorn.epfl.ch', () => {
    return isEpflDown(['unicorn']).then((isDown) => {
      isDown.should.equal(true);
      cleanup();
    });
  });

  it('should throw an exception with an object in parameter', () => {
    return isEpflDown({}).then(() => {
    }).catch((err) => {
      err.message.should.equal('Expected an array');
      cleanup();
    });
  });
});
