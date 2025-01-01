import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const timeline = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/timeline", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    yearText: z.string(),
    rawYear: z.string(),
    heroImage: z.string().optional(),
    url: z.string().optional(),
    imageCredit: z.string().optional(),
  }),
});

export const collections = { timeline };
