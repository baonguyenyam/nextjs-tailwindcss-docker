"use client";

import React from "react";

import BlockBG from "@/app/components/global_components/block-bg";
import RootLayout from "@/templates/layout-root";

import about from "./about.module.scss";

export default function About(props?: any) {
	return (
		<RootLayout>
			<div className={about.root}>
				<BlockBG
					bgImage={props?.metadata?.openGraph?.images[0]?.url}
					title={props?.metadata?.title}
					buttonText="Home"
					buttonLink="/"
				/>
			</div>
		</RootLayout>
	);
}
