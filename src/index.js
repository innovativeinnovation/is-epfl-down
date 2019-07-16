/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

const got = require('got');
const logSymbols = require('log-symbols');

const BotName = 'InnoInnoBot';
const BotUrl = 'https://github.com/innovativeinnovation/';

const promises = [];
let isDown = false;

const putDomainIsUp = (domain) => console.log(logSymbols.success, domain);

const putDomainIsDown = (domain) => {
  isDown = true;
  console.log(logSymbols.error, domain);
};

const buildUrl = (str) => {
  if (str.indexOf('http://') !== -1 || str.indexOf('https://') !== -1) {
    return str;
  }
  return str + '.epfl.ch';
};

const testUrls = (str, opts) => {
  str = buildUrl(str);
  promises.push(got.get(str, {
    headers: {
      'user-agent': BotName + '/v1.0.0 - ' + BotUrl
    },
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
