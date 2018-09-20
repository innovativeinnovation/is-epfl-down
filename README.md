<p align="center">
  <img alt="Is EPFL Down" src="https://raw.githubusercontent.com/epfl-devrun/is-epfl-down/master/docs/readme/readme-logo.png">
</p>

<p align="center">
  Check if EPFL is down.
</p>

<p align="center">
  <a href="https://travis-ci.org/epfl-devrun/is-epfl-down">
    <img alt="Travis Status" src="https://travis-ci.org/epfl-devrun/is-epfl-down.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/epfl-devrun/is-epfl-down?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/epfl-devrun/is-epfl-down/badge.svg?branch=master"/>
  </a>
  <a href="https://david-dm.org/epfl-devrun/is-epfl-down">
    <img alt="Dependency Status" src="https://david-dm.org/epfl-devrun/is-epfl-down/status.svg"/>
  </a>
  <a href="https://raw.githubusercontent.com/epfl-devrun/is-epfl-down/master/LICENSE">
    <img alt="Apache License 2.0" src="https://img.shields.io/badge/license-Apache%202.0-blue.svg">
  </a>
  <a href='https://www.npmjs.com/package/is-epfl-down'>
    <img alt="NPM Version" src="https://img.shields.io/npm/v/is-epfl-down.svg" />
  </a>
</p>

---

Command Line
------------

### Install

Install this globally and you'll have access to the `is-epfl-down` command
anywhere on your system.

```bash
npm i is-epfl-down -g
```

### Usage

```console
is-epfl-down
Usage: is-epfl-down [options]

Startup options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

Hosts and urls options:
  -c, --config     Test your own list of subdomains or urls             [string]
  -f, --faculties  Test EPFL faculties websites
  -m, --main       Test EPFL main site
  -o, --officials  Test EPFL officials websites
  -s, --services   Test EPFL services
  -t, --timeout    Milliseconds to wait for a server                    [number]

Notifications options:
  -a, --alarm   Override default alarm sound                            [string]
  -n, --notify  Show a native notification            [boolean] [default: false]
  -q, --quiet   No alarm sound                        [boolean] [default: false]

Examples:
  is-epfl-down -m          Test EPFL main site
  is-epfl-down -s -n       Test EPFL services and use native notification
  is-epfl-down -f -t 2000  Test EPFL faculties with a timeout of 2 seconds

Documentation:
  https://epfl-devrun.github.io/projects/is-epfl-down/cli.html

Copyright 2017-2018 ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI.
```

To read more about `is-epfl-down` cli, please visit the documentation: https://epfl-devrun.github.io/projects/is-epfl-down/cli.html.

API
---

### Install

```bash
npm i is-epfl-down --save 
```

### Usage

```javascript
var isEpflDown = require('is-epfl-down');

isEpflDown(['www','actu','blogs']).then(function(isDown) {
  console.log(isDown)
  //=> false
});

isEpflDown(['unicorn'], {timeout: 1000}).then(function(isDown) {
  console.log(isDown)
  //=> true
});
```

To read more about `is-epfl-down` module, please visit the documentation: https://epfl-devrun.github.io/projects/is-epfl-down/api.html.

Screenshot
----------

![command line screenshot](https://raw.githubusercontent.com/epfl-devrun/is-epfl-down/master/docs/readme/screenshot.png)

Contributing
------------

Contributions are always welcome.

See [Contributing](CONTRIBUTING.md).

Developers
----------

  * [Olivier Bieler](https://github.com/obieler)
  * [William Belle](https://github.com/williambelle)

Contributors
------------

  * [Nicolas Borboën](https://github.com/ponsfrilus)

License
-------

Apache License 2.0

(c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.

See the [LICENSE](LICENSE) file for more details.
