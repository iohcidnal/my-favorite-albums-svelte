<script lang="ts">
  import AlbumCard from './album-card.svelte';
  import type { AlbumCardProps } from '$lib/common';

  export let albums: AlbumCardProps[];
</script>

<div class="flex flex-col flex-1 md:flex-wrap md:flex-row justify-center gap-4 pt-4 pb-24">
  {#each albums as album (album.id)}
    <AlbumCard {album} />
  {/each}
</div>
