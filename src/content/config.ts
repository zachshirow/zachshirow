import { z, defineCollection } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
	if (!array.length) return array;
	const lowercaseItems = array.map((str) => str.toLowerCase());
	const distinctItems = new Set(lowercaseItems);
	return Array.from(distinctItems);
}

const post = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			draft: z.boolean(),
			title: z.string().max(60),
			aliases: z.array(z.string()).or(z.string()).optional(),
			description: z.string().min(50).max(160).optional(),
			publishDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			updatedDate: z
				.string()
				.or(z.date())
				.optional()
				.transform((str) => (str ? new Date(str) : undefined)),
			image: z.string().optional(),
			tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
		}),
});

export const collections = { post };
