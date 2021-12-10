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
  export let envVars: EnvVars;
  let counter = 0;
  let y: any;
</script>

<main class="prose max-w-4xl mx-auto py-8">
  <h1>Welcome to SvelteKit</h1>

  <h2>Client ID: {envVars.CLIENT_ID}</h2>
  <h2>Callback URL: {envVars.CALLBACK_URL}</h2>

  <h3>Current count is {counter}</h3>
  <button class="btn btn-success" on:click={() => counter++}>+ 1</button>
</main>
