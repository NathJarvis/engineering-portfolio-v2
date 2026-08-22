import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    tag: z.string().optional().default('DEEP DIVE'),
    category: z.string().optional().default('ENGINEERING'),
    publishDate: z.string().optional().default('2026'),
    readTime: z.string().optional(),
    description: z.string().optional().default(''),
    typstPdfUrl: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

export const collections = { blog };