import type { Metadata } from "next";

import Deny from "@/app/components/page_components/Deny";
import { meta } from "@/app/lib/meta";

export const metadata: Metadata = {
	...meta({
		title: "Access Denied",
		description: "You do not have permission to access this page",
	}),
};

export default async function Index() {
	return <Deny />;
}
