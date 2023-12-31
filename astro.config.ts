import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import remarkUnwrapImages from "remark-unwrap-images";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import wikiLinkPlugin from "@portaljs/remark-wiki-link";
import remarkCallout from "remark-callout";

const pageUrlPathPrefix = "posts/";

// https://astro.build/config
export default defineConfig({
	// ! Please remember to replace the following site property with your own domain
	site: "https://zachshirow.ir/",
	markdown: {
		remarkPlugins: [
			remarkCallout,
			remarkUnwrapImages,
			[
				wikiLinkPlugin,
				{ pathFormat: "obsidian-absolute", wikiLinkResolver: (slug) => [pageUrlPathPrefix + slug] },
			],
			remarkReadingTime,
		],
		remarkRehype: { footnoteLabelProperties: { className: [""] } },
		shikiConfig: {
			theme: "dracula",
			wrap: true,
		},
	},
	experimental: {
		assets: true,
	},
	image: {
		domains: ["https://files.zachshirow.ir/"],
		// https://docs.astro.build/en/guides/assets/#using-sharp
		service: sharpImageService(),
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
	],
	compressHTML: true,
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
