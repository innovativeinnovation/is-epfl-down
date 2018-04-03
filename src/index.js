/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

var got = require('got');
var url = require('url');
var logSymbols = require('log-symbols');
var promises = [];
var isDown = false;

var putDomainIsUp = function (domain) {
  console.log(logSymbols.success, domain);
};

var putDomainIsDown = function (domain) {
  isDown = true;
  console.log(logSymbols.error, domain);
};

var buildUrl = function (str) {
  var parsedUrl = url.parse(str);
  if (parsedUrl.protocol) {
    return str;
  }
  return str + '.epfl.ch';
};

var testUrls = function (str, opts) {
  str = buildUrl(str);
  promises.push(got.head(str, {
    timeout: opts.timeout,
    retries: 0
  }).then(function () {
    putDomainIsUp(str);
  }).catch(function () {
    putDomainIsDown(str);
  }));
};

module.exports = function (domainsList, opts) {
  if (!Array.isArray(domainsList)) {
    return Promise.reject(new TypeError('Expected an array'));
  }
  opts = opts || {};
  opts.timeout = opts.timeout || 7000;

  for (var i = 0; i < domainsList.length; i++) {
    testUrls(domainsList[i], opts);
  }
  return Promise.all(promises).then(function () {
    return isDown;
  });
};
