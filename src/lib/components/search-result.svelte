<script lang="ts">
  import { page } from '$app/stores';

  import type { AlbumCardProps } from '$lib/common';
  import AlbumCard from './album-card.svelte';
  import RemoveAction from './remove-action.svelte';
  import FavoriteAction from './favorite-action.svelte';

  export let albums: AlbumCardProps[];
  const component = $page.path === '/albums' ? FavoriteAction : RemoveAction;
</script>

<div class="flex flex-col flex-1 md:flex-wrap md:flex-row justify-center gap-4 pt-4 pb-24">
  {#each albums as album (album.id)}
    <AlbumCard {album}>
      <svelte:component this={component} {album} slot="card-action" />
    </AlbumCard>
  {/each}
</div>
