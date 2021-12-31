<script lang="ts">
  import { AlbumCardProps, fetcher, toCardProps } from '$lib/common';
  import AlbumLoader from '$lib/components/album-loader.svelte';
  import SearchResult from '$lib/components/search-result.svelte';

  let nextUrl = 'https://api.spotify.com/v1/me/albums?market=US&offset=0&limit=12';
  let albums: AlbumCardProps[] = [];

  (() => handleLoadMore())();

  async function handleLoadMore() {
    const result = await fetcher(nextUrl).get();
    nextUrl = result.next;
    albums = [...albums, ...result.items.map((item: any) => toCardProps(item.album))];
  }
</script>

<main>
  <SearchResult {albums} />
  <AlbumLoader {albums} disabled={!nextUrl} on:click={handleLoadMore} />
</main>
