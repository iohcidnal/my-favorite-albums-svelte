<script lang="ts">
  import { albums } from '$lib/common';
</script>

{#if $albums.length}
  <div class="navbar bg-neutral text-neutral-content fixed bottom-0 w-screen justify-end px-4">
    <span class="mr-5 text-sm text-info">
      <div class="badge badge-lg badge-info">{$albums.length}</div>
      results
    </span>
    <button class="btn btn-secondary" on:click>load more </button>
  </div>
{/if}
