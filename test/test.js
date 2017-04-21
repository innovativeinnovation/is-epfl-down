/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

'use strict';

var should = require('chai').should();

describe('cli.js should return result', function() {
  this.timeout(15000);
  var cliOption = '--main';
  var response;

  beforeEach(function(done) {
    var execFile = require('child_process').execFile;
    execFile('./src/cli.js', [cliOption], function(error, stdout) {
      if (error) {
        throw error;
      }
      response = stdout;
      done();
    });
  });

  it('result should match "time for a break" or "working fine"', function() {
    response.should.match(/time for a break|working fine/);
    cliOption = '--config=./test/testConfig.json';
  });

  it('result should match "time for a break" or "working fine"', function() {
    response.should.match(/time for a break|working fine/);
  });
});
