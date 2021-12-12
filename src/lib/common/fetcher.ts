export default function fetcher(url: string) {
  return {
    get: async () => {
      let options: RequestInit;
      if (url.match(/spotify/i)) {
        const accessToken = localStorage.getItem('spotify-access-token-svelte');
        options = {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        };
      }
      const response = await fetch(url, options);
      const result = await response.json();

      return result;
    }
  };
}
