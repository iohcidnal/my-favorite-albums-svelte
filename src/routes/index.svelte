<script context="module" lang="ts">
  import type { EnvVars } from './env-vars.json';

  export async function load({ fetch }) {
    const url = '/env-vars.json';
    const response = await fetch(url);

    if (response.ok) {
      const envVars: EnvVars = await response.json();
      return {
        props: {
          envVars
        }
      };
    }

    return {
      status: response.status,
      error: new Error('Error occured while getting environment variables.')
    };
  }
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let envVars: EnvVars;

  let accessToken: string;
  const scopes = 'user-read-private+user-read-email';

  onMount(async () => {
    const url = window.location.href;
    if (url.indexOf('_token') > -1) {
      accessToken = url.split('_token=')[1].split('&')[0].trim();
      localStorage.setItem('spotify-access-token-svelte', accessToken);
      await goto('top-albums', { replaceState: true });
    }
  });

  function handleLogin() {
    document.location = `https://accounts.spotify.com/authorize/?client_id=${envVars.CLIENT_ID}&response_type=token&redirect_uri=${envVars.REDIRECT_URL}&scope=${scopes}`;
  }
</script>

<main class="container mx-auto pt-6 text-center">
  <p class="prose-xl">Welcome to My Top 10 Albums</p>
  <p class="font-light">
    A simple application that lets you browse and pick your top 10 albums of all-time.
  </p>
  <div class="pt-6">
    Continue by logging into
    <a class="link-primary" href="/" on:click|preventDefault={handleLogin}>Spotify</a>
  </div>
</main>
