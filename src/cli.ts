#!/usr/bin/env node
import process from 'node:process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const args = process.argv.slice(2);

// Handle Flags
if (args.includes('--help') || args.includes('-h')) {
	console.log(`
  Assert that environment variables exist.

  Usage
    $ env-must-exist <ENV_VAR_1> [ENV_VAR_2...]

  Options
    --version, -v   Show version
    --help, -h      Show help

  Examples
    $ env-must-exist DATABASE_URL
    $ env-must-exist API_KEY SECRET_TOKEN
	`);
	process.exit(0);
}

if (args.includes('--version') || args.includes('-v')) {
	console.log(pkg.version);
	process.exit(0);
}

if (args.length === 0) {
	console.error('Error: No environment variables provided to check.\nUsage: env-must-exist <VAR_NAME>');
	process.exit(1);
}

const missing: string[] = [];

for (const arg of args) {
	if (!process.env[arg]) {
		missing.push(arg);
	}
}

if (missing.length > 0) {
	console.error('❌ Missing required environment variables:');
	for (const m of missing) {
		console.error(`   - ${m}`);
	}
	process.exit(1);
}

// Quiet success (Unix philosophy)
process.exit(0);