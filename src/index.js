/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

const got = require('got');
const url = require('url');
const logSymbols = require('log-symbols');

let promises = [];
let isDown = false;

let putDomainIsUp = (domain) => console.log(logSymbols.success, domain);

let putDomainIsDown = (domain) => {
  isDown = true;
  console.log(logSymbols.error, domain);
};

let buildUrl = (str) => {
  let parsedUrl = url.parse(str);
  if (parsedUrl.protocol) {
    return str;
  }
  return str + '.epfl.ch';
};

let testUrls = (str, opts) => {
  str = buildUrl(str);
  promises.push(got.head(str, {
    timeout: opts.timeout,
    retries: 0
  }).then(
    () => putDomainIsUp(str)
  ).catch(
    () => putDomainIsDown(str)
  ));
};

module.exports = (domainsList, opts) => {
  if (!Array.isArray(domainsList)) {
    return Promise.reject(new TypeError('Expected an array'));
  }
  opts = opts || {};
  opts.timeout = opts.timeout || 7000;

  for (let i = 0; i < domainsList.length; i++) {
    testUrls(domainsList[i], opts);
  }
  return Promise.all(promises).then(() => {
    return isDown;
  });
};
