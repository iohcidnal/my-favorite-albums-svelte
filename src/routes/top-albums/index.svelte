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

  $: (async () => {
    const value = (await debounce(() => searchTerm)) as string;
    if (value !== $debouncedSearchTerm) {
      // Search term was changed. Need to fetch and reinitialize next url.
      shouldFetch = true;
      nextUrl.set(`${SPOTIFY_SEARCH_URL}${value}&type=album&market=US&offset=0&limit=12`);
      debouncedSearchTerm.set(value);
    }
  })();

  // Create a reactive function. This needs to be declared before calling `searchAlbums`
  // because order in which reactive statements are called matters.
  $: fetchAlbums = fetcher($nextUrl);

  $: (async () => {
    if (shouldFetch) {
      albums.set($debouncedSearchTerm ? await searchAlbums() : []);
    }
  })();

  async function searchAlbums(): Promise<AlbumCardProps[]> {
    try {
      const result = await fetchAlbums.get();
      nextUrl.set(result.albums.next);
      return result.albums.items.map(toCardProps);
    } catch {
      await goto('/');
    }
  }

  async function handleLoadMore() {
    const result = await fetchAlbums.get();
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
