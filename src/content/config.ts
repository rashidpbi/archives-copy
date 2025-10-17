import { defineCollection, z } from 'astro:content';

export const collections = {
  interviews: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      href: z.string(),
      youtubeId: z.string(),
    }),
  }),
  blogs: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      imageAlt: z.string(),
      href: z.string(),
    }),
  }),

};