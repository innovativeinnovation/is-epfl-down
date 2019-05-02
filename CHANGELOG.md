Changelog
=========

### v4.3.1 / 2019-05-02

  - Update dependencies
  - Remove `.eslintignore`
  - Test against Node.js 12

### v4.3.0 / 2019-04-08

  - Set user-agent
  - Remove mobile (`m.epfl.ch`) from subdomains

### v4.2.0 / 2019-04-06

  - Add more domain to test
  - Remove EPFL TV and homepage from subdomains
  - Remove useless option `-?`
  - Improve `README.md` documentation API
  - Move from `istanbul` to `nyc` for code coverage
  - Update dev dependencies

### v4.1.3 / 2019-02-28

  - Update dependencies
  - Test against Node.js 11
  - Clean `README.md`

### v4.1.2 / 2018-10-25

  - Remove `bottin.epfl.ch`
  - Move external documentation to `README.md`
  - Update copyright (transfer from EPFL DevRun)

### v4.1.1 / 2018-09-20

  - Update dependencies

### v4.1.0 / 2018-09-07

  - Clean subdomains list
  - Clean contributing
  - Update dependencies

### v4.0.0 / 2018-08-08

  - Drop support for Node < 8
  - Update dependencies
  - Set `1234.epfl.ch` and `myjob.epfl.ch` to https

### v3.0.0 / 2018-05-17

  - Drop support for Node < 6
  - Rewrite code
  - Move to david-dm (watching deps)
  - Update dependencies
  - Fix mocha globals (console.log in tests)

### v2.3.0 / 2018-04-26

  - Add native notification (cli argument `--notify`)
  - Improve command line usage
  - Update dependencies

### v2.2.0 / 2018-04-04

  - Add more domain to test
  - Move to eslint

### v2.1.0 / 2018-03-29

  - Add cli argument `--quiet`
  - Disable `package-lock.json`
  - Update dependencies
  - Improve `README.md`
  - Fix integration tests

### v2.0.2 / 2018-02-13

  - Add more domain to test
  - Remove short, git and svn services
  - Clean usage text
  - Update copyright

### v2.0.1 / 2018-01-23

  - Update dependencies

### v2.0.0 / 2017-12-07

  - [Breaking change] - Use HTTPS for protocol-less URLs (previously it defaulted to http).
  - Add check of specific urls
  - Update dependencies

### v1.1.1 / 2017-09-27

  - Update dependencies

### v1.1.0 / 2017-09-01

  - Set user agent string `DevRunBot`

### v1.0.6 / 2017-08-23

  - Add more domain to test
  - Fix no sound on Linux (process.exit)

### v1.0.5 / 2017-08-09

  - Add a lot more domain to test
  - Update dev dependencies
  - Explicitly exit when isDown equals true

### v1.0.4 / 2017-07-21

  - Add more domain to test
  - Update dependencies

### v1.0.3 / 2017-07-02

  - Add more domain to test
  - Improve cli informations with examples
  - Update logo (darker red)

### v1.0.2 / 2017-06-25

  - Add more domain to test
  - Update dependencies

### v1.0.1 / 2017-05-30

  - Update dependencies

### v1.0.0 / 2017-05-12

  - Add cli argument ``--alarm``
  - Add more domain to test
  - Add documentation link
  - Improve tests

### v0.5.0 / 2017-05-04

  - Add cli argument ``--timeout``
  - Update yargs dependency

### v0.4.0 / 2017-04-29

  - Rewrite package with cli + module
  - Add coverage badge
  - Add more domain to test
  - Handle short grouped argument
  - Update dependencies

### v0.3.0 / 2017-04-25

  - Add cli argument ``--version``
  - Handle short cli arguments
  - Set timeout to 7 seconds with 0 retry

### v0.2.0 / 2017-04-21

  - Add cli argument ``--config``
  - Improve logo

### v0.1.1 / 2017-04-20

  - Add more domain to test

### v0.1.0 / 2017-04-18

  - Play alarm sound if a subdomain is down
  - Clean copyright

### v0.0.5 / 2017-04-13

  - Add more domain to test
  - Update contributing guide

### v0.0.4 / 2017-03-30

  - Add cli argument ``--faculties`` and ``--officials``

### v0.0.3 / 2017-03-30

  - Add cli argument ``--main`` and ``--services``
  - Add more services to check
  - Add dependencies status badge

### v0.0.2 / 2017-03-26

  - Add more domain to test

### v0.0.1 / 2017-03-25

  - First version, released on an unsuspecting world.
