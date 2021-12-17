<script>
  import { goto } from '$app/navigation';
</script>

<h1>Hello</h1>
<button on:click={() => goto('/top-albums')}>Back</button>
