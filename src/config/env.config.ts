export interface EnvConfig {
  PORT: number,
}

export const env = process.env as unknown as EnvConfig;
