#!/usr/bin/env node

/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

const isEpflDown = require('./index.js');
const subDomains = require('./subdomain.json');

const notifier = require('node-notifier');
const jsonfile = require('jsonfile');
const player = require('play-sound')();
const path = require('path');
const yargs = require('yargs')

  // Main
  .option('m', {
    alias: 'main',
    describe: 'Test EPFL main site'
  })

  // Officials
  .option('o', {
    alias: 'officials',
    describe: 'Test EPFL officials websites'
  })

  // Faculties
  .option('f', {
    alias: 'faculties',
    describe: 'Test EPFL faculties websites'
  })

  // Services
  .option('s', {
    alias: 'services',
    describe: 'Test EPFL services'
  })

  // Config
  .option('c', {
    alias: 'config',
    describe: 'Test your own list of subdomains or urls',
    requiresArg: true,
    type: 'string'
  })

  // Timeout
  .option('t', {
    alias: 'timeout',
    describe: 'Milliseconds to wait for a server',
    requiresArg: true,
    type: 'number'
  })

  // Alarm
  .option('a', {
    alias: 'alarm',
    describe: 'Override default alarm sound',
    requiresArg: true,
    type: 'string'
  })

  // Quiet
  .option('q', {
    alias: 'quiet',
    describe: 'No alarm sound',
    default: false,
    type: 'boolean'
  })

  // Notify
  .option('n', {
    alias: 'notify',
    describe: 'Show a native notification',
    default: false,
    type: 'boolean'
  })

  // Groups
  .group(['h', 'v'], 'Startup options:')
  .group(['c', 'f', 'm', 'o', 's', 't'], 'Hosts and urls options:')
  .group(['a', 'n', 'q'], 'Notifications options:')

  // Version
  .alias('v', 'version')

  // Help
  .help('h')
  .alias('h', 'help')
  .usage('Usage: $0 [options]')
  .example('$0 -m', 'Test EPFL main site')
  .example('$0 -s -n', 'Test EPFL services and use native notification')
  .example('$0 -f -t 2000', 'Test EPFL faculties with a timeout of 2 seconds')
  .epilog('')
  .epilog(
    'Documentation:\n' +
    '  https://epfl-devrun.github.io/projects/is-epfl-down/cli.html\n\n' +
    'Copyright 2017-2018 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, ' +
    'Switzerland, VPSI.'
  );

const argv = yargs.argv;

let buildSubDomainList = () => {
  let subDomainList = [];
  if (argv['?']) {
    yargs.showHelp();
  }
  if (argv.m) {
    subDomainList = subDomainList.concat(subDomains.main);
  }
  if (argv.s) {
    subDomainList = subDomainList.concat(subDomains.services);
  }
  if (argv.f) {
    subDomainList = subDomainList.concat(subDomains.faculties);
  }
  if (argv.o) {
    subDomainList = subDomainList.concat(subDomains.officials);
  }
  if (argv.c) {
    try {
      subDomainList = subDomainList.concat(jsonfile.readFileSync(argv.c));
    } catch (e) {
      console.log(e);
    }
  }
  if (subDomainList.length === 0) {
    yargs.showHelp();
    process.exit(0);
  }
  return subDomainList;
};

let playAlarm = (callback) => {
  if (argv.a) {
    player.play(argv.a);
  } else {
    let child = player.play(path.join(__dirname, '/alarm.wav'));
    child.on('close', callback);
  }
};

let putResult = (isDown) => {
  if (isDown) {
    let downMsg = '🍺  It\'s time for a break!';
    console.log('\n' + downMsg);
    let notifyOptions = {
      title: 'is-epfl-down',
      message: downMsg
    };
    if (process.platform === 'linux') {
      notifyOptions.icon = path.join(__dirname, 'icon.png');
    }
    if (argv.n) {
      notifier.notify(notifyOptions);
    }
    if (!argv.q) {
      playAlarm(() => process.exit(0));
    } else {
      process.exit(0);
    }
  } else {
    console.log('\n🦄  Everything is working fine!');
  }
};

let opts = {};
if (argv.t) {
  opts.timeout = argv.t;
}

isEpflDown(buildSubDomainList(), opts).then(putResult);
