<script lang="ts">
  import { page } from '$app/stores';
</script>

<nav class="navbar bg-neutral text-neutral-content">
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch">
      <a class:selected={$page.path === '/albums'} href="/albums"> albums </a>
      <a class:selected={$page.path === '/favorites'} href="/favorites"> my favorites </a>
    </div>
  </div>
</nav>

<style>
  a {
    @apply btn btn-ghost btn-sm rounded-btn;
  }
  .selected {
    @apply btn-active font-bold;
  }
</style>
