<div class="flex flex-col h-screen">
  <nav class="navbar bg-neutral text-neutral-content">
    <div class="flex-none px-2 mx-2">
      <span class="text-lg font-bold"> Albums </span>
    </div>
    <div class="flex-1 px-2 mx-2">
      <div class="items-stretch">
        <a class="btn btn-ghost btn-sm rounded-btn" href="/albums"> browse </a>
        <a class="btn btn-ghost btn-sm rounded-btn" href="/albums/favorites"> my favorites </a>
      </div>
    </div>
  </nav>
  <slot />
</div>
