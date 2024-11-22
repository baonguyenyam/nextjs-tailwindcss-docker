import { site } from "../const/const";

export const meta = (data: any) => {
	return {
		title: data?.title || site.name,
		description: data?.description || site.long_description,
		openGraph: {
			title: data?.title || site.name,
			description: data?.description || site.long_description,
			images: data.openGraph?.images || [],
		},
		twitter: {
			card: "summary_large_image",
			title: data?.title || site.name,
			description: data?.description || site.long_description,
			creator: site.seo.twitter,
			images: data.openGraph?.images || [],
		},
		keywords: data?.keywords || [],
		icons: {
			icon: "/favicon/favicon.ico",
			shortcut: "/favicon/apple-icon.png",
			apple: "/favicon/apple-icon.png",
			url: "/favicon/apple-icon.png",
			rel: "icon",
			type: "image/png",
			other: {
				rel: "apple-touch-icon-precomposed",
				url: "/favicon/apple-touch-icon-precomposed.png",
			},
		},
		manifest: "/favicon/manifest.json",
		verification: {
			google: site.seo.google,
			other: {
				"msvalidate.01": [site.seo.bing],
			},
		},
		facebook: {
			appId: site.seo.facebook_app_id,
		},
		url: site.site_url,
		alternates: {
			canonical: site.site_url,
		},
	};
};
