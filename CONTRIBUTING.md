Contributing
============

Welcome, so you are thinking about contributing?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:innovativeinnovation/is-epfl-down.git
cd is-epfl-down
npm i
```

Test
----

Unit and integration tests:

```bash
npm t
```

Code coverage:

```bash
npm run coverage
```

Run
---

```bash
./src/cli.js
```

Release
-------

1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create the tag (`git tag -a v<version> -m "Tagging the v<version> release"`)
1. Publish with `npm publish`
