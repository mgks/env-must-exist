# env-must-exist

**Assert that environment variables are present. Fail fast in CI.**

<p>
  <img src="https://img.shields.io/npm/v/env-must-exist.svg?style=flat-square&color=d25353" alt="npm version">
  <img src="https://img.shields.io/bundlephobia/minzip/env-must-exist?style=flat-square&color=38bd24" alt="size">
  <img src="https://img.shields.io/npm/dt/env-must-exist.svg?style=flat-square&color=success&color=38bd24" alt="npm downloads">
  <img src="https://img.shields.io/github/license/mgks/env-must-exist.svg?style=flat-square&color=blue" alt="license">
</p>

**The Problem:** You deploy to production, but forgot to add `DATABASE_URL` to the dashboard. Your app crashes silently or in a weird way 5 minutes later.

**The Solution:** Add a pre-flight check script. If the var is missing, the deploy fails immediately with a clear error.

## Install

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
