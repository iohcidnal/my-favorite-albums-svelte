import { onDestroy } from 'svelte';

export default function debounce(fn: () => any, delay?: number) {
  let timeout: NodeJS.Timeout;

  onDestroy(() => {
    clearTimeout(timeout);
  });

  return new Promise(resolve => (timeout = setTimeout(() => resolve(fn()), delay ?? 1000)));
}
