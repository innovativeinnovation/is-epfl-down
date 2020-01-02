<p align="center">
  <img alt="Is EPFL Down" src="https://raw.githubusercontent.com/innovativeinnovation/is-epfl-down/master/docs/readme/readme-logo.png">
</p>

<p align="center">
  Check if EPFL is down.
</p>

<p align="center">
  <a href="https://travis-ci.org/innovativeinnovation/is-epfl-down">
    <img alt="Travis Status" src="https://travis-ci.org/innovativeinnovation/is-epfl-down.svg?branch=master">
  </a>
  <a href="https://coveralls.io/github/innovativeinnovation/is-epfl-down?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/innovativeinnovation/is-epfl-down/badge.svg?branch=master"/>
  </a>
  <a href="https://david-dm.org/innovativeinnovation/is-epfl-down">
    <img alt="Dependencies Status" src="https://david-dm.org/innovativeinnovation/is-epfl-down/status.svg"/>
  </a>
  <a href="https://raw.githubusercontent.com/innovativeinnovation/is-epfl-down/master/LICENSE">
    <img alt="Apache License 2.0" src="https://img.shields.io/badge/license-Apache%202.0-blue.svg">
  </a>
  <a href='https://www.npmjs.com/package/is-epfl-down'>
    <img alt="NPM Version" src="https://img.shields.io/npm/v/is-epfl-down.svg"/>
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
```

##### Startup options

`-v`, `--version`  
Print `is-epfl-down`'s version.

`-h`, `--help`  
Print `is-epfl-down` command line options.

##### Hosts and urls options

`-c [file]`, `--config=[file]`  
Test your own list of subdomains or urls. File must be a path to a json file.
A json example:

```json
["actu","blogs","memento","wiki","http://www.epfl.ae"]
```

`-f`, `--faculties`  
Test EPFL faculties websites.

`-m`, `--main`  
Test EPFL main site.

`-o`, `--officials`  
Test EPFL officials websites.

`-s`, `--services`  
Test EPFL services.

`-t [number]`, `--timeout=[number]`  
Milliseconds to wait for a server to send response headers before aborting
request.

##### Notifications options

`-a [file]`, `--alarm=[file]`  
Override default alarm sound. File must be a path to a mp3 or a wav file.

`-n`, `--notify`  
Show a native notification.

`-q`, `--quiet`  
No alarm sound.

##### Examples

Testing the main site:  
`is-epfl-down -m`

Testing EPFL services:  
`is-epfl-down -s`

Testing your own config:  
`is-epfl-down --config=/path/to/my/config.json`

Testing EPFL faculties with a timeout of 2s:  
`is-epfl-down -f -t 2000`

Testing EPFL faculties with a specific alarm sound in case of failure:  
`is-epfl-down -f -a /path/to/my/sound.mp3`

API
---

### Install

```bash
npm i is-epfl-down --save
```

### Usage

```javascript
var isEpflDown = require('is-epfl-down');

isEpflDown(['www','actu','blogs','http://www.epfl.ae']).then(function(isDown) {
  console.log(isDown)
  //=> false
});

isEpflDown(['unicorn'], {timeout: 1000}).then(function(isDown) {
  console.log(isDown)
  //=> true
});
```

### isEpflDown(subDomains, [options])

Returns a Promise with a boolean as parameter.

##### subDomains

Type: `array`

A list of subdomains from EPFL or urls.

##### options

Type: `object`

Any of the following options.

###### timeout

Type: `number`

Milliseconds to wait for a server to send response headers before aborting
request.

Screenshot
----------

![command line screenshot](https://raw.githubusercontent.com/innovativeinnovation/is-epfl-down/master/docs/readme/screenshot.png)

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

Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.  
Modified work (c) William Belle, 2018-2020.

See the [LICENSE](LICENSE) file for more details.
