<script lang="ts">
  import { goto } from '$app/navigation';

  import { AlbumCardProps, debounce, fetcher, toCardProps } from '$lib/common';
  import AlbumLoader from '$lib/components/album-loader.svelte';
  import SearchResult from '$lib/components/search-result.svelte';

  const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search?q=';
  let searchTerm: string;
  let debouncedSearchTerm: string;
  let albums: AlbumCardProps[];

  $: debounce(() => searchTerm).then((value: string) => (debouncedSearchTerm = value));

  // Create a reactive object. This needs to be declared before calling `searchAlbums`
  // because order in which reactive statements are called matters in svelte.
  $: fetchAlbums = fetcher(
    `${SPOTIFY_SEARCH_URL}${debouncedSearchTerm}&type=album&market=US&limit=12&offset=0`
  );

  $: (async () => (albums = debouncedSearchTerm ? await searchAlbums() : []))();

  async function searchAlbums(): Promise<AlbumCardProps[]> {
    try {
      const result = await fetchAlbums.get();
      fetchAlbums = fetcher(result.albums.next);
      return result.albums.items.map(toCardProps);
    } catch {
      await goto('/');
    }
  }

  async function handleLoadMore() {
    const result = await fetchAlbums.get();
    fetchAlbums = fetcher(result.albums.next);
    albums = [...albums, ...result.albums.items.map(toCardProps)];
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
  <SearchResult {albums} />
  <AlbumLoader {albums} on:click={handleLoadMore} />
</main>
