<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error }) {
    return {
      props: {
        message: error.message
      }
    };
  }
</script>

<script lang="ts">
  export let message: string;
</script>

<div class="text-center pt-20">
  <p class="text-xl text-error">Something went wrong...</p>
  <p class="text-4xl">&#128542;</p>
  <p class="text-xl pt-10 text-info font-light">{message}</p>
  <p class="text-xl pt-10">
    Please click <a class="link-primary" href="/">here</a> to continue.
  </p>
</div>
