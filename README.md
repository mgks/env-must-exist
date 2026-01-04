# env-must-exist

**Assert that environment variables are present. Fail fast in CI.**

<p>
  <img src="https://img.shields.io/npm/v/env-must-exist.svg?style=flat-square&color=d25353" alt="npm version">
  <img src="https://img.shields.io/bundlephobia/minzip/env-must-exist?style=flat-square&color=38bd24" alt="size">
  <img src="https://img.shields.io/npm/dt/env-must-exist.svg?style=flat-square&color=success&color=38bd24" alt="npm downloads">
  <img src="https://img.shields.io/github/license/mgks/env-must-exist.svg?style=flat-square&color=blue" alt="license">
</p>

A tiny pre-flight check that stops broken deploys before they happen. It verifies required environment variables like `DATABASE_URL` at deploy time and fails fast with a clear error if anything is missing, instead of letting your app crash later in production in confusing ways.

## Installation

```bash
npm install env-must-exist
```

## Usage

### CLI (Recommended for CI)

Add this to your build or start script:

```bash
{
  "scripts": {
    "build": "env-must-exist DATABASE_URL STRIPE_KEY && next build"
  }
}
```

If `STRIPE_KEY` is missing, you get:

```bash
❌ Missing required environment variables:
   - STRIPE_KEY
```

### API

```js
import { assertEnv } from 'env-must-exist';

assertEnv(['DATABASE_URL', 'API_KEY']);
```

## License

MIT

> **{ github.com/mgks }**
> 
> ![Website Badge](https://img.shields.io/badge/Visit-mgks.dev-blue?style=flat&link=https%3A%2F%2Fmgks.dev) ![Sponsor Badge](https://img.shields.io/badge/%20%20Become%20a%20Sponsor%20%20-red?style=flat&logo=github&link=https%3A%2F%2Fgithub.com%2Fsponsors%2Fmgks)
