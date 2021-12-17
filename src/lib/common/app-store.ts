import { writable } from 'svelte/store';
import type { AlbumCardProps } from '.';

export const albums = writable<AlbumCardProps[]>([]);
export const debouncedSearchTerm = writable('');
/** Url for the next batch of albums to load. Used in loading more albums. */
export const nextUrl = writable('');
