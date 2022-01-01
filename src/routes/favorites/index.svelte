<script lang="ts">
  import {
    favorites,
    favoritesNextUrl,
    fetcher,
    shouldDownloadFavorites,
    toCardProps
  } from '$lib/common';
  import AlbumLoader from '$lib/components/album-loader.svelte';
  import SearchResult from '$lib/components/search-result.svelte';

  (() => {
    if ($shouldDownloadFavorites) {
      $shouldDownloadFavorites = false;
      $favorites = [];
      handleLoadMore();
    }
  })();

  async function handleLoadMore() {
    const result = await fetcher($favoritesNextUrl).get();
    $favoritesNextUrl = result.next;
    $favorites = [...$favorites, ...result.items.map((item: any) => toCardProps(item.album))];
  }
</script>

<main>
  <SearchResult albums={$favorites} />
  <AlbumLoader albums={$favorites} disabled={!$favoritesNextUrl} on:click={handleLoadMore} />
</main>
