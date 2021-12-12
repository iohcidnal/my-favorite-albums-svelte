<script context="module" lang="ts">
  export interface AlbumCardProps {
    id: string;
    albumName: string;
    artistName: string;
    imageUrl: string;
  }
</script>

<script lang="ts">
  export let album: AlbumCardProps;
</script>

<div class="card compact shadow-xl w-64 flex-auto">
  <figure>
    <img src={album.imageUrl} alt="Album" />
  </figure>
  <div class="card-body justify-end">
    <h2 class="card-title">{album.albumName}</h2>
    <p>{album.artistName}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-sm btn-outline">MORE INFO</button>
      <button class="btn btn-sm btn-outline">FAVORITE</button>
    </div>
  </div>
</div>
