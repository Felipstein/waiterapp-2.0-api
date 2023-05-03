export interface EnvConfig {
  NODE_ENV: 'development' | 'production',
  PORT: number,
}

export const env = process.env as unknown as EnvConfig;
