import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(itemA: CollectionEntry<'blogs'>, itemB: CollectionEntry<'blogs'>) {
    return new Date(itemB.data.pubDate).getTime() - new Date(itemA.data.pubDate).getTime();
}

export function createSlugFromTitle(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

export function getAllTags(posts: CollectionEntry<'blogs'>[]) {
    const tags: string[] = [...new Set(posts.flatMap((post) => post.data.tags || []).filter(Boolean))];
    return tags
        .map((tag) => {
            return {
                name: tag,
                id: createSlugFromTitle(tag)
            };
        })
        .filter((obj, pos, arr) => {
            return arr.map((mapObj) => mapObj.id).indexOf(obj.id) === pos;
        });
}

export function getPostsByTag(posts: CollectionEntry<'blogs'>[], tagId: string) {
    const filteredPosts: CollectionEntry<'blogs'>[] = posts.filter((post) => (post.data.tags || []).map((tag) => createSlugFromTitle(tag)).includes(tagId));
    return filteredPosts;
}

export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  // Normalize the path - ensure it starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  // If base is just "/", return the path as-is
  if (base === "/") {
    return normalizedPath;
  }
  // Otherwise, combine base and path, ensuring no double slashes
  const baseClean = base.endsWith("/") ? base.slice(0, -1) : base;
  return `${baseClean}${normalizedPath}`;
};