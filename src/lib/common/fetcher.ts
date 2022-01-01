import { browser } from '$app/env';

export default function fetcher(url: string) {
  if (!browser) return;

  const accessToken = localStorage.getItem('spotify-access-token-svelte');
  const options: RequestInit = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    }
  };

  return {
    get: async () => {
      options.method = 'GET';
      const response = await fetch(url, options);
      return await response.json();
    },
    put: async (body: Record<string, any>) => {
      options.method = 'PUT';
      options.body = JSON.stringify(body);
      const response = await fetch(url, options);
      if (response.status !== 200) throw new Error(response.statusText);
    },
    delete: async (body: Record<string, any>) => {
      options.method = 'DELETE';
      options.body = JSON.stringify(body);
      const response = await fetch(url, options);
      if (response.status !== 200) throw new Error(response.statusText);
    }
  };
}
