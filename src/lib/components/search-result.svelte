<script lang="ts">
  import AlbumCard, { AlbumCardProps } from './album-card.svelte';
  export let albums: AlbumCardProps[];
</script>

<div class="flex flex-wrap gap-4 pt-4">
  {#each albums as album (album.id)}
    <AlbumCard {album} />
  {/each}
</div>
