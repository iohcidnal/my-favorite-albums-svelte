<script lang="ts">
  import { goto } from '$app/navigation';

  import { debounce, fetcher } from '$lib/common';
  import type { AlbumCardProps } from '$lib/components/album-card.svelte';
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
      return result.albums.items.map((item: any) => {
        const album: AlbumCardProps = {
          id: item.id,
          albumName: item.name,
          artistName: item.artists[0].name,
          imageUrl: item.images[1].url
        };
        return album;
      });
    } catch {
      await goto('/');
    }
  }
</script>

<main class="px-10 py-6">
  <div class="form-control">
    <input
      class="input input-bordered input-info"
      type="text"
      placeholder="Search albums"
      bind:value={searchTerm}
    />
  </div>
  <SearchResult {albums} />
</main>
