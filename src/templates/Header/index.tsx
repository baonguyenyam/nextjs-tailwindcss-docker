"use client";

import React, { useEffect, useMemo, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { site } from "@/app/const/const";
import { MAIN_MENU, MOBILE_MENU } from "@/app/const/nav";
import MadeLabHeader from "@/core/Header";
import Logo from "@/public/imgs/logo_black.png";

import header from "./header.module.scss";

library.add(fab, faFacebookF, faInstagram, faBars, faTimes, faUser);

const MemoizedFontAwesomeIcon = React.memo(FontAwesomeIcon);

export default function Header() {
	const pathname = usePathname();
	const [menuCP, setMenuCP] = useState(false);

	// Event click outside of the menu
	const handleClickOutside = (e: any) => {
		const menuCP = document.getElementById("menuCP") as HTMLElement;
		const menuCreate = document.getElementById("menu-create") as HTMLElement;
		if (menuCP && menuCreate) {
			if (!menuCP.contains(e.target) && !menuCreate.contains(e.target)) {
				setMenuCP(false);
			}
		}
	};

	function toggleMenu() {
		const idMenuClose = document.getElementById("idMenuClose") as HTMLElement;
		const idMenuOpen = document.getElementById("idMenuOpen") as HTMLElement;
		const menu = document.getElementById("menu") as HTMLElement;
		if (idMenuClose?.classList.contains("hidden")) {
			idMenuClose?.classList.remove("hidden");
		} else {
			idMenuClose?.classList.add("hidden");
		}
		if (idMenuOpen?.classList.contains("hidden")) {
			idMenuOpen?.classList.remove("hidden");
		} else {
			idMenuOpen?.classList.add("hidden");
		}
		if (menu?.classList.contains("hidden")) {
			menu?.classList.remove("hidden");
		} else {
			menu?.classList.add("hidden");
		}
	}

	function hideMenu() {
		const menu = document.getElementById("menu") as HTMLElement;
		const idMenuClose = document.getElementById("idMenuClose") as HTMLElement;
		const idMenuOpen = document.getElementById("idMenuOpen") as HTMLElement;
		if (!menu?.classList.contains("hidden")) {
			menu?.classList.add("hidden");
		}
		if (!idMenuClose?.classList.contains("hidden")) {
			idMenuClose?.classList.add("hidden");
		}
		if (idMenuOpen?.classList.contains("hidden")) {
			idMenuOpen?.classList.remove("hidden");
		}
	}

	useEffect(() => {
		// Context Menu
		// Disable right click
		// if (process.env.NODE_ENV === "production") {
		// 	document.addEventListener("contextmenu", (event) => {
		// 		event.preventDefault();
		// 		setIsModalOpen("autosubscribe");
		// 	});
		// }

		// Scroll menu
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const iconProps = useMemo(
		() => ({
			className: header.menu_toggle_icon,
			color: "#00000",
		}),
		[],
	);

	return (
		<>
			<MadeLabHeader
				className={`${header.root}`}
				id="headerblock">
				<header className={`${header.begin} `}>
					<div className={`${header.content}`}>
						{/* Logo */}
						<div className={`${header.logo}`}>
							<Link
								href="/"
								className={`${header.logo_link}`}
								onClick={() => hideMenu()}>
								<Image
									alt="Nguyen Pham"
									src={Logo}
									className={`${header.logo_img}`}
									height={36}
									width={104}
								/>
							</Link>
						</div>

						{/* Nav */}
						<div className={`${header.nav}`}>
							<ul
								className={`${header.nav_ul}`}
								itemScope
								itemType="https://schema.org/SiteNavigationElement"
								role="menu">
								{MAIN_MENU.map((item: any, index: any) => (
									<li
										key={index}
										className={`${header.nav_li}`}
										itemProp={"name"}
										role="menuitem">
										<Link
											href={item.path}
											className={`${pathname === item.path ? header.nav_link_active : header.nav_link}  `}
											onClick={() => hideMenu()}
											prefetch={true}>
											<span>{item.label}</span>
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Icons */}
						<div className={`${header.icon_wrapper} items-center`}>
							{/* Toggle Menu */}
							<button
								id="menu-toggle"
								className={`${header.menu_toggle}`}
								type="button">
								<div id="idMenuOpen">
									<span
										className={header.menu_toggle_button}
										onClick={() => toggleMenu()}>
										<MemoizedFontAwesomeIcon
											{...iconProps}
											icon={faBars}
										/>
									</span>
								</div>
								<div
									id="idMenuClose"
									className="hidden">
									<span
										className={header.menu_toggle_button}
										onClick={() => toggleMenu()}>
										<MemoizedFontAwesomeIcon
											{...iconProps}
											icon={faTimes}
										/>
									</span>
								</div>
							</button>
						</div>
					</div>
				</header>

				<nav
					className={`${header.menu} hidden`}
					id="menu">
					<div className="flex flex-col justify-between h-full">
						<div className={`${header.menu_wrapper}`}>
							<div className={`${header.menu_group} group`}>
								<div className="item">
									<div className="lg:hidden">
										<ul
											className={header.menu_ul}
											itemScope
											itemType="https://schema.org/SiteNavigationElement">
											{MAIN_MENU.map((item: any, index: any) => (
												<li
													key={index}
													className={`${header.menu_li} `}
													itemProp={"name"}
													role="menuitem">
													<Link
														href={item.path}
														className={`${header.menu_link} `}
														prefetch={true}>
														<span>{item.label}</span>
													</Link>
												</li>
											))}
										</ul>
									</div>
									<ul
										className={header.menu_ul}
										itemScope
										itemType="https://schema.org/SiteNavigationElement">
										{MOBILE_MENU.map((item: any, index: any) => (
											<li
												key={index}
												className={`${header.menu_li} `}
												itemProp={"name"}
												role="menuitem">
												<Link
													href={item.path}
													className={`${header.menu_link} `}
													prefetch={true}>
													{item.label}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
						<div className="mt-auto p-3 lg:p-10">
							<div className="flex flex-col lg:flex-row lg:justify-end text-xs">
								<p className="font-medium">
									© {new Date().getFullYear()} {site.name}
									<Link
										href="/privacy"
										className="border-b border-white">
										Privacy Policy
									</Link>
								</p>
							</div>
						</div>
					</div>
				</nav>
			</MadeLabHeader>
		</>
	);
}
