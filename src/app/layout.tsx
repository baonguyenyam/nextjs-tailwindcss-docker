import React from "react";
import { ToastContainer } from "react-toastify";
import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

import StyledJsxRegistry from "@/core/StyledJsxRegistry";

import { site } from "./const/const";

import "@/assets/globals.scss";

export const metadata: Metadata = {
	title: {
		template: `%s | ${site.name}`,
		default: site.name,
	},
	description: site.description,
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			suppressHydrationWarning={true}>
			<head suppressHydrationWarning={true}>
				<meta
					charSet="utf-8"
					suppressHydrationWarning={true}
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
					suppressHydrationWarning={true}
				/>
				{site.seo.analytics !== "" && (
					<>
						<Script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${site.seo.analytics}`}
							id="google-analytics"></Script>
						<Script id="google-analytics-config">
							{`window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${site.seo.analytics}');`}
						</Script>
					</>
				)}
				<link
					rel="dns-prefetch"
					href="//www.googletagmanager.com"
				/>
				<link
					rel="dns-prefetch"
					href="//fonts.googleapis.com"
				/>
				<link
					rel="dns-prefetch"
					href="//fonts.gstatic.com"
				/>
				<link
					rel="dns-prefetch"
					href="//ajax.googleapis.com"
				/>
				<link
					rel="dns-prefetch"
					href="//apis.google.com"
				/>
				<link
					rel="dns-prefetch"
					href="//google-analytics.com"
				/>
				<link
					rel="dns-prefetch"
					href="//www.google-analytics.com"
				/>
				<link
					rel="dns-prefetch"
					href="//ssl.google-analytics.com"
				/>
				<link
					rel="dns-prefetch"
					href="//youtube.com"
				/>
				<link
					rel="dns-prefetch"
					href="//api.pinterest.com"
				/>
				<link
					rel="dns-prefetch"
					href="//connect.facebook.net"
				/>
				<link
					rel="dns-prefetch"
					href="//platform.x.com"
				/>
				<link
					rel="dns-prefetch"
					href="//syndication.x.com"
				/>
				<link
					rel="dns-prefetch"
					href="//platform.instagram.com"
				/>
				<link
					rel="dns-prefetch"
					href="//1.1.1.1"
				/>
				<meta
					name="generator"
					content={site.name}
				/>
				<meta
					name="theme-color"
					content="#000000"
				/>
				<meta
					name="apple-mobile-web-app-capable"
					content="yes"
				/>
				<meta
					name="mobile-web-app-capable"
					content="yes"
				/>
				<link
					rel="apple-touch-startup-image"
					href="/favicon/android-icon-192x192.png"
				/>
				<meta
					name="apple-mobile-web-app-title"
					content={site.name}
				/>
				<meta
					name="application-name"
					content={site.name}
				/>
			</head>
			<body
				suppressHydrationWarning={true}
				className={`${process.env.NODE_ENV === "development" ? "debug-screens" : site.code + "-app-io"}`}>
				<ThemeProvider>
					<ToastContainer />
					<StyledJsxRegistry>{children}</StyledJsxRegistry>
				</ThemeProvider>
			</body>
		</html>
	);
}
