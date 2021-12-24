<script lang="ts">
  export let selected: 'albums' | 'favorites';
</script>

<nav class="navbar bg-neutral text-neutral-content">
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch">
      <a
        class="btn btn-ghost btn-sm rounded-btn"
        class:selected={selected === 'albums'}
        href="/albums"
      >
        albums
      </a>
      <a
        class="btn btn-ghost btn-sm rounded-btn"
        class:selected={selected === 'favorites'}
        href="/favorites"
      >
        my favorites
      </a>
    </div>
  </div>
</nav>

<style>
  .selected {
    @apply btn-active font-bold;
  }
</style>
