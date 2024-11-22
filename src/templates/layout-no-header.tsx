import React from "react";
import type { Metadata } from "next";

import { site } from "@/app/const/const";
import MadeLabCore from "@/core/Core";
import MadeLabMain from "@/core/Main";
import app from "@/templates/app.module.scss";
import Footer from "@/templates/Footer";

import "@/assets/globals.scss";

export const metadata: Metadata = {
	title: {
		template: `%s | ${site.name}`,
		default: site.name,
	},
	description: site.description,
};

export default function NoHeaderLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<MadeLabCore className={`${app.core}`}>
			<MadeLabMain>{children}</MadeLabMain>

			<Footer />
		</MadeLabCore>
	);
}
