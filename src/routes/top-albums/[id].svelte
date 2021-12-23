<script context="module" lang="ts">
  import type { LoadInput } from '@sveltejs/kit';

  export async function load({ page }: LoadInput) {
    const { id } = page.params;
    return {
      props: { id }
    };
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  import { albums, fetcher } from '$lib/common';

  export let id: string;
  let album: any;

  const href = $albums.find(a => a.id === id)?.href;
  const fetch = fetcher(href);

  $: (async () => {
    album = await fetch.get();
  })();
</script>

{#if album}
  <!-- <button on:click={() => goto('/top-albums')}>Back</button> -->
  <div class="flex flex-col md:flex-row min-h-screen">
    <div class="hero flex-1" style={`background-image: url(${album.images[0].url});`}>
      <div class="hero-overlay bg-opacity-60" />
      <div class="text-2xl md:text-4xl font-bold text-center text-white">{album.name}</div>
    </div>
    <div class="flex-1 bg-gray-50 p-8 md:p-4">
      <div class="flex flex-col gap-4">
        <section>
          <p class="text-lg">Artists</p>
          <ul class="list-disc list-outside pl-10">
            {#each album.artists as artist}
              <li>{artist.name}</li>
            {/each}
          </ul>
        </section>
        <section>
          <p class="text-lg">Release Date</p>
          <ul class="list-disc list-outside pl-10">
            <li>{album.release_date}</li>
          </ul>
        </section>
        <section>
          <p class="text-lg">Tracks</p>
          <ul class="list-disc list-outside pl-10">
            {#each album.tracks.items as track}
              <li>{track.name}</li>
            {/each}
          </ul>
        </section>
      </div>
    </div>
  </div>
{/if}
