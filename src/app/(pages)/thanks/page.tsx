import React, { Suspense } from "react";
import { Skeleton } from "antd";
import type { Metadata } from "next";

import Thanks from "@/app/components/page_components/Thanks";
import { site } from "@/app/const/const";
import { meta } from "@/app/lib/meta";

export const metadata: Metadata = {
	...meta({
		title: "Thanks for contacting us",
		description: `Thank you for your interest in our services. We will be in touch with you shortly.`,
		openGraph: {
			images: [`${site.site_url}/imgs/seo/thanks.jpg`],
		},
		url: `${site.site_url}/thanks`,
	}),
};

export default async function Index() {
	return (
		<Suspense fallback={<Skeleton active />}>
			<Thanks metadata={metadata} />;
		</Suspense>
	);
}
