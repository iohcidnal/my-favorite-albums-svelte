<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import envVars from '$lib/env-vars';

  const scopes = 'user-read-private+user-read-email';
  let accessToken: string;

  onMount(async () => {
    const url = window.location.href;
    if (url.indexOf('_token') > -1) {
      accessToken = url.split('_token=')[1].split('&')[0].trim();
      localStorage.setItem('spotify-access-token-svelte', accessToken);
      await goto('top-albums', { replaceState: true });
    }
  });

  function handleLogin() {
    document.location = `https://accounts.spotify.com/authorize/?client_id=${envVars.clientId}&response_type=token&redirect_uri=${envVars.redirectUrl}&scope=${scopes}`;
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
