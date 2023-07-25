/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2023.
 * See the LICENSE file for more details.
 */

require('chai').should();
const version = require('../package').version;

describe('is-epfl-down cli', function () {
  this.timeout(15000);
  let nextCliOption = ['-m'];
  let response;

  beforeEach((done) => {
    const execFile = require('child_process').execFile;
    execFile('./src/cli.js', nextCliOption, (error, stdout) => {
      if (error) {
        throw error;
      }
      response = stdout;
      done();
    });
  });

  it('should match "working fine" with option -m', () => {
    response.should.match(/working fine/);
    nextCliOption = ['--config=./test/testConfigGood.json'];
  });

  it('should match "working fine" with a good config', () => {
    response.should.match(/working fine/);
    nextCliOption = ['--unicorn'];
  });

  it('should not match "time for a break|working fine" ' +
    'with option --unicorn', () => {
    response.should.not.match(/time for a break|working fine/);
    nextCliOption = ['--config=./test/testConfigBad.json', '-q'];
  });

  it('should match "time for a break" with a bad config', () => {
    response.should.match(/time for a break/);
    nextCliOption = ['-m', '-t 10', '-q'];
  });

  it('should match "time for a break" with option -t 10', () => {
    response.should.match(/time for a break/);
    nextCliOption = ['-v'];
  });

  it('should match version with option -v', () => {
    response.should.equal(version + '\n');
  });
});
