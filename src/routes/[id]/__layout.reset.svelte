<!-- 
  Made this a layout reset to make sure this does not inherit from other layouts
  in case I decide to move this somewhere else.
-->
<nav class="navbar bg-neutral text-neutral-content">
  <div class="flex-1 px-2 mx-2">
    <div class="items-stretch">
      <button class="btn btn-secondary btn-sm" on:click={() => history.back()}> Back </button>
    </div>
  </div>
</nav>
<slot />
