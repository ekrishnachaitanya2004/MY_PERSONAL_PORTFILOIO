import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogsCollection = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.date().optional(),
        pubDatetime: z.string().or(z.date()).optional(),
        author: z.string().optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        featured: z.boolean().optional(),
        slug: z.string().optional(),
        image: z.object({
            url: image().or(z.string()),
            alt: z.string().optional()
        })
        .optional(),
    }).transform((data) => {
        // Convert pubDatetime to pubDate if pubDate is not present
        let pubDate = data.pubDate;
        if (!pubDate && data.pubDatetime) {
            pubDate = typeof data.pubDatetime === 'string' 
                ? new Date(data.pubDatetime) 
                : data.pubDatetime;
        }
        // Default to current date if neither exists
        if (!pubDate) {
            pubDate = new Date();
        }
        return {
            ...data,
            pubDate,
        };
    }),
});

export const collections = {
    blogs: blogsCollection,
};
