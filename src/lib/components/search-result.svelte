<script lang="ts">
  import { albums } from '$lib/common';
  import AlbumCard from './album-card.svelte';
</script>

<div class="flex flex-wrap justify-center gap-4 pt-4 pb-24">
  {#each $albums as album (album.id)}
    <AlbumCard {album} />
  {/each}
</div>
