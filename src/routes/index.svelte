<script lang="ts">
  let counter = 0;
</script>

<main>
  <h1>Welcome to SvelteKit</h1>
  <h2>Current count is {counter}</h2>
  <input type="button" value="+1" on:click={() => counter++} />
</main>
