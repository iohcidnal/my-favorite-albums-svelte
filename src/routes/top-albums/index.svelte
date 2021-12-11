<script lang="ts">
  import { debounce } from '$lib/common';

  let searchTerm: string;
  let debouncedSearchTerm: string;

  $: {
    debounce(() => searchTerm).then((value: string) => (debouncedSearchTerm = value));
  }

  $: {
    console.log('debouncedSearchTerm :>> ', debouncedSearchTerm);
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
</main>
