"use client";

import React from "react";

import BlockBG from "@/app/components/global_components/block-bg";
import RootLayout from "@/templates/layout-root";

import thanks from "./thanks.module.scss";

export default function Thanks(props?: any) {
	return (
		<RootLayout>
			<div className={thanks.root}>
				<BlockBG
					bgImage={props?.metadata?.openGraph?.images[0]?.url}
					title={props?.metadata?.title}
					buttonText="Home"
					buttonLink="/="
				/>
			</div>
		</RootLayout>
	);
}
