import envVars from '$lib/env-vars';

export interface EnvVars {
  CLIENT_ID: string;
  REDIRECT_URL: string;
}

/**
 * Get route for environment variable.
 * @returns Promise<{ body: EnvVars }>
 */
export async function get(): Promise<{ body: EnvVars }> {
  return {
    body: {
      CLIENT_ID: envVars.clientId,
      REDIRECT_URL: envVars.redirectUrl
    }
  };
}
