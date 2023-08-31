import type { SiteConfig } from "@/data/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "زکریا شیرمحمدلی",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Zachshirow",
	// Meta property used as the default description meta property
	description: "باغچه دیجیتال زکریا شیرمحمدلی. آموزش زبان انگلیسی و ابزار های بهره وری.",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "fa",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "fa",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "fa",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "خانه",
		path: "/",
	},
	{
		title: "درباره",
		path: "/about/",
	},
	{
		title: "بلاگ",
		path: "/posts/",
	},
];
