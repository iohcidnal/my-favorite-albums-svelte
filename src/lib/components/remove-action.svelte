<script lang="ts">
  import { goto } from '$app/navigation';
  import { AlbumCardProps, favorites, fetcher } from '$lib/common';

  export let album: AlbumCardProps;
  const fetch = fetcher('https://api.spotify.com/v1/me/albums');

  async function handleClick() {
    try {
      await fetch.delete({ ids: [album.id] });
      const index = $favorites.findIndex(f => f.id === album.id);
      $favorites = [...$favorites.slice(0, index), ...$favorites.slice(index + 1)];
    } catch {
      await goto('/');
    }
  }
</script>

<button class="btn btn-sm btn-outline" on:click={handleClick}>remove</button>
