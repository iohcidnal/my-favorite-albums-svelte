<script lang="ts">
  import { goto } from '$app/navigation';
  import { AlbumCardProps, albums, favorites, fetcher } from '$lib/common';

  export let album: AlbumCardProps;
  const fetch = fetcher('https://api.spotify.com/v1/me/albums');

  async function handleClick() {
    try {
      await fetch.put({ ids: [album.id] });
      const index = $albums.findIndex(a => a.id === album.id);
      $albums = [...$albums.slice(0, index), ...$albums.slice(index + 1)];

      if (!$favorites.find(f => f.id === album.id)) {
        $favorites = [album, ...$favorites];
      }
    } catch {
      await goto('/');
    }
  }
</script>

<button class="btn btn-sm btn-outline" on:click={handleClick}> favorite </button>
