import React, { Suspense } from "react";
import { Skeleton } from "antd";
import type { Metadata } from "next";

import Home from "@/app/components/page_components/Home";

import { site } from "./const/const";

export const metadata: Metadata = {
	title: {
		template: `%s | ${site?.name}`,
		default: site?.description,
	},
	description: site?.long_description,
	keywords: [],
	openGraph: {
		title: site?.description,
		description: site?.long_description,
		images: [
			{
				url: `${site?.site_url}/imgs/seo/main.jpg`,
				width: 1200,
				height: 630,
				alt: site?.description,
			},
		],
	},
	icons: {
		icon: "/favicon/favicon.ico",
		shortcut: "/favicon/apple-icon.png",
		apple: "/favicon/apple-icon.png",
		other: {
			rel: "apple-touch-icon-precomposed",
			url: "/favicon/apple-icon-precomposed.png",
		},
	},
	manifest: "/favicon/manifest.json",
};

export default async function Index() {
	return (
		<Suspense fallback={<Skeleton active />}>
			<Home />
		</Suspense>
	);
}
