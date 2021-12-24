<script lang="ts">
  import type { AlbumCardProps } from '$lib/common';
  export let album: AlbumCardProps;

  function handleClick() {
    console.log(album);
    // onclick, save album to Spotify user's 'Your Music' library.
    // https://developer.spotify.com/documentation/web-api/reference/#/operations/save-albums-user
  }
</script>

<button class="btn btn-sm btn-outline" on:click={handleClick}>favorite</button>
