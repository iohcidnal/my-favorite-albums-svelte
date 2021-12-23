import type { AlbumCardProps } from './types';

export default function toCardProps(item): AlbumCardProps {
  return {
    id: item.id,
    albumName: item.name,
    artistName: item.artists[0].name,
    href: item.href,
    imageUrl: item.images[1].url
  };
}
