<script lang="ts">
  import { goto } from '$app/navigation';

  import {
    AlbumCardProps,
    albums,
    debounce,
    debouncedSearchTerm,
    fetcher,
    nextUrl,
    toCardProps
  } from '$lib/common';
  import AlbumLoader from '$lib/components/album-loader.svelte';
  import SearchResult from '$lib/components/search-result.svelte';

  const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search?q=';
  let searchTerm = $debouncedSearchTerm;
  let shouldFetch = $albums.length === 0; // Should only fetch if there are no albums in the store

  $: debounce(() => searchTerm).then((value: string) => {
    if (value !== $debouncedSearchTerm) {
      shouldFetch = true; // search term was changed, need to fetch
      debouncedSearchTerm.set(value);
    }
  });

  // Create a reactive object. This needs to be declared before calling `searchAlbums`
  // because order in which reactive statements are called matters in svelte.
  $: fetchAlbums = fetcher(
    `${SPOTIFY_SEARCH_URL}${$debouncedSearchTerm}&type=album&market=US&limit=12&offset=0`
  );

  $: (async () => {
    if (shouldFetch) {
      albums.set($debouncedSearchTerm ? await searchAlbums() : []);
    }
  })();

  async function searchAlbums(): Promise<AlbumCardProps[]> {
    try {
      // TODO: Fix this! load more is broken when navigating back to this page
      // nextUrl is not being set properly
      const result = await fetchAlbums.get();
      nextUrl.set(result.albums.next);
      fetchAlbums = fetcher(result.albums.next);

      return result.albums.items.map(toCardProps);
    } catch {
      await goto('/');
    }
  }

  async function handleLoadMore() {
    const result = await fetchAlbums.get();
    fetchAlbums = fetcher(result.albums.next);
    nextUrl.set(result.albums.next);
    albums.update(current => [...current, ...result.albums.items.map(toCardProps)]);
  }
</script>

<main>
  <div class="sticky top-0 px-4 py-4 z-50 bg-white shadow-md form-control">
    <input
      class="input bg-gray-100"
      type="text"
      placeholder="Search albums"
      bind:value={searchTerm}
    />
  </div>
  <SearchResult />
  <AlbumLoader on:click={handleLoadMore} />
</main>
