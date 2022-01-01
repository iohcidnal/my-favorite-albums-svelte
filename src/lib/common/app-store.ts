import { writable } from 'svelte/store';
import type { AlbumCardProps } from '.';

export const albums = writable<AlbumCardProps[]>([]);
export const favorites = writable<AlbumCardProps[]>([]);
export const shouldDownloadFavorites = writable(true);
export const debouncedSearchTerm = writable('');

/** Url for the next batch of albums to load. Used in loading more albums. */
export const nextUrl = writable('');
export const favoritesNextUrl = writable(
  'https://api.spotify.com/v1/me/albums?market=US&offset=0&limit=12'
);
