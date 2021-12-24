<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { AlbumCardProps } from '$lib/common';

  export let album: AlbumCardProps;
</script>

<div
  class="card compact card-side md:flex-col md:w-64 hover:bg-gray-100 shadow-xl"
  transition:fade|local
>
  <figure>
    <img src={album.imageUrl} alt="Album" />
  </figure>
  <div class="card-body justify-end">
    <h2 class="card-title">{album.albumName}</h2>
    <p>{album.artistName}</p>
    <div class="card-actions justify-center">
      <a class="btn btn-sm btn-outline" href={`/${album.id}`} sveltekit:noscroll sveltekit:prefetch
        >MORE INFO</a
      >
      <button class="btn btn-sm btn-outline">FAVORITE</button>
    </div>
  </div>
</div>
