"use client";

import React, { useCallback, useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebookF, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useTheme } from "next-themes";

import { site } from "@/app/const/const";
import MadeLabFooter from "@/core/Footer";

import footer from "./footer.module.scss";

library.add(fab, faFacebookF, faInstagram, faLinkedinIn, faYoutube);

// Memoize the FontAwesomeIcon component
const MemoizedFontAwesomeIcon = React.memo(FontAwesomeIcon);

export default function Footer() {
	const { theme, setTheme } = useTheme();
	const [gettheme, setgettheme] = useState(
		<MemoizedFontAwesomeIcon
			className="w-4 h-4"
			icon={faSun}
		/>,
	);

	const toggleTheme = useCallback(() => {
		if (theme === "dark") {
			setTheme("light");
			setgettheme(
				<MemoizedFontAwesomeIcon
					className="w-4 h-4"
					icon={faSun}
				/>,
			);
		} else {
			setTheme("dark");
			setgettheme(
				<MemoizedFontAwesomeIcon
					className="w-4 h-4"
					icon={faMoon}
				/>,
			);
		}
	}, [theme, setTheme]);

	useEffect(() => {
		if (theme === "dark") {
			setgettheme(
				<MemoizedFontAwesomeIcon
					className="w-4 h-4"
					icon={faMoon}
				/>,
			);
		} else {
			setgettheme(
				<MemoizedFontAwesomeIcon
					className="w-4 h-4"
					icon={faSun}
				/>,
			);
		}
		if (theme === "system") {
			setTheme("light");
		}
	}, [setTheme, theme]);

	return (
		<MadeLabFooter
			className={footer.root}
			id="footerblock"
			role="complementary"
			itemScope
			itemType="https://schema.org/WPFooter">
			<div className={footer.footer_wrapper}>
				<div className={footer.footer_block}>
					<div className={footer.footer_content}>
						<ul>
							<li className={footer.footer_li}>Modern</li>
							<li className={footer.footer_li}>Apparel</li>
							<li>Development</li>
							<li>Education</li>
						</ul>
					</div>

					<div className={footer.footer_social}>
						<ul className={footer.footer_social_ul}>
							<li className="font-light">
								<button
									type="button"
									onClick={toggleTheme}
									className="flex bg-black text-white dark:!text-made-100 w-7 h-7 items-center justify-center">
									<span>{gettheme}</span>
								</button>
							</li>
							{site.social.map((social, index) => (
								<li
									key={index}
									className={footer.footer_social_li}>
									<Link
										href={social.url}
										className={footer.footer_social_link}>
										<MemoizedFontAwesomeIcon
											icon={social.name === "Facebook" ? faFacebookF : social.name === "Instagram" ? faInstagram : social.name === "LinkedIn" ? faLinkedinIn : faYoutube}
											className={footer.footer_social_icon}
										/>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</MadeLabFooter>
	);
}
