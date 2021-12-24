<script lang="ts">
  import { AlbumCardProps, fetcher, toCardProps } from '$lib/common';
  import SearchResult from '$lib/components/search-result.svelte';

  const SPOTIFY_SAVED_ALBUMS_URL = `https://api.spotify.com/v1/me/albums?market=US&offset=0&limit=12`;
  let albums: AlbumCardProps[] = [];

  (async () => {
    const result = await fetcher(SPOTIFY_SAVED_ALBUMS_URL).get();
    albums = result.items.map((item: any) => toCardProps(item.album));
  })();
</script>

<main>
  <SearchResult {albums} />
</main>
