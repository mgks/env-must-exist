import process from 'node:process';

export function assertEnv(vars: string[]): void {
	const missing: string[] = [];
	for (const v of vars) {
		if (!process.env[v]) {
			missing.push(v);
		}
	}

	if (missing.length > 0) {
		throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
	}
}