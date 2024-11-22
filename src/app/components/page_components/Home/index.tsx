"use client";

import React, { useEffect, useState } from "react";

import { setHomePageSchema } from "@/app/lib/utils";
import RootLayout from "@/templates/layout-root";

import home from "./home.module.scss";

export default function Home() {
	const [windowWidth, setWindowWidth] = useState<number>(0);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
		};
		setHomePageSchema();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [windowWidth]);

	return (
		<RootLayout>
			<div className={home.root}></div>
		</RootLayout>
	);
}
