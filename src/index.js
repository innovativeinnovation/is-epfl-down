/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2020.
 * See the LICENSE file for more details.
 */

const got = require('got');
const logSymbols = require('log-symbols');

const BotName = 'InnoInnoBot';
const BotUrl = 'https://github.com/innovativeinnovation/';

const promises = [];
let isDown = false;

const putDomainIsUp = (url) => {
  console.log(logSymbols.success, removeHttpsFromUrl(url));
};

const putDomainIsDown = (url) => {
  isDown = true;
  console.log(logSymbols.error, removeHttpsFromUrl(url));
};

const buildUrl = (str) => {
  if (str.indexOf('http://') !== -1 || str.indexOf('https://') !== -1) {
    return str;
  }
  return 'https://' + str + '.epfl.ch';
};

const removeHttpsFromUrl = (str) => {
  return str.replace(/^https?:\/\//, '');
};

const testUrls = (str, opts) => {
  const url = buildUrl(str);
  promises.push(got.get(url, {
    headers: {
      'user-agent': BotName + '/v1.0.0 - ' + BotUrl
    },
    timeout: opts.timeout,
    retries: 0
  }).then(
    () => putDomainIsUp(url)
  ).catch(
    () => putDomainIsDown(url)
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
