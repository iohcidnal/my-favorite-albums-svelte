<script lang="ts">
  import { goto } from '$app/navigation';
  import { fade } from 'svelte/transition';
  import type { AlbumCardProps } from '$lib/common';

  export let album: AlbumCardProps;
</script>

<div class="card compact shadow-xl w-64 hover:bg-gray-100" transition:fade|local>
  <figure>
    <img src={album.imageUrl} alt="Album" />
  </figure>
  <div class="card-body justify-end">
    <h2 class="card-title">{album.albumName}</h2>
    <p>{album.artistName}</p>
    <div class="card-actions justify-center">
      <button
        class="btn btn-sm btn-outline"
        on:click={async () =>
          await goto(`top-albums/${album.id}`, {
            noscroll: true,
            keepfocus: true
          })}>MORE INFO</button
      >
      <button class="btn btn-sm btn-outline">FAVORITE</button>
    </div>
  </div>
</div>
