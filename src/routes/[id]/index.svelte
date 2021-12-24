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
  import { fetcher } from '$lib/common';
  import { navigating } from '$app/stores';

  export let id: string;
  const SPOTIFY_ALBUM_URL = 'https://api.spotify.com/v1/albums';
  let album: any;

  navigating.subscribe(nav => {
    if (nav?.from.path.includes('favorites')) {
    }
  });

  $: (async () => {
    album = await fetcher(`${SPOTIFY_ALBUM_URL}/${id}`).get();
  })();
</script>

{#if album}
  <div class="flex flex-col md:flex-row h-screen">
    <div class="hero flex-1" style={`background-image: url(${album.images[0].url});`}>
      <div class="hero-overlay bg-opacity-60" />
      <div class="flex flex-col hero-content text-neutral-content">
        <div class="text-2xl md:text-4xl font-bold text-center">{album.name}</div>
      </div>
    </div>
    <div class="flex-1 pt-2 pl-4 pr-4">
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
