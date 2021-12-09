<script lang="ts">
  let counter = 0;
</script>

<main class="prose max-w-4xl mx-auto py-8">
  <h1>Welcome to SvelteKit</h1>
  <h3>Current count is {counter}</h3>
  <button class="btn btn-success" on:click={() => counter++}>+ 1</button>
</main>
