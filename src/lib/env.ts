function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

function optionalEnv(key: string, fallback = ''): string {
  return process.env[key] ?? fallback;
}

export const serverEnv = {
  get anthropicApiKey() {
    return requireEnv('ANTHROPIC_API_KEY');
  },
};

export const publicEnv = {
  appName: optionalEnv('NEXT_PUBLIC_APP_NAME', 'World Cup HQ'),
};
