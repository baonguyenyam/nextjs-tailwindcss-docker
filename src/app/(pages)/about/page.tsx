import React, { Suspense } from "react";
import { Skeleton } from "antd";
import type { Metadata } from "next";

import About from "@/app/components/page_components/About";
import { site } from "@/app/const/const";
import { meta } from "@/app/lib/meta";

export const metadata: Metadata = {
	...meta({
		title: "About Us",
		description: `About ${site.name}`,
		openGraph: {
			images: [`${site.site_url}/imgs/seo/about.jpg`],
		},
		url: `${site.site_url}/about`,
	}),
};

export default async function Index() {
	return (
		<Suspense fallback={<Skeleton active />}>
			<About metadata={metadata} />
		</Suspense>
	);
}
