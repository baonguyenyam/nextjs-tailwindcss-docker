import React, { Suspense } from "react";
import { Skeleton } from "antd";
import type { Metadata } from "next";

import Contact from "@/app/components/page_components/Contact";
import { site } from "@/app/const/const";
import { meta } from "@/app/lib/meta";

export const metadata: Metadata = {
	...meta({
		title: "Contact Us",
		description: `Contact ${site.name}`,
		openGraph: {
			images: [`${site.site_url}/imgs/seo/contact.jpg`],
		},
		url: `${site.site_url}/contact`,
	}),
};

export default async function Index() {
	return (
		<Suspense fallback={<Skeleton active />}>
			<Contact metadata={metadata} />
		</Suspense>
	);
}
