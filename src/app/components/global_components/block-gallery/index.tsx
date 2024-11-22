import React, { useEffect, useMemo } from "react";
import lgRotate from "lightgallery/plugins/rotate";
import lgVideo from "lightgallery/plugins/video";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-rotate.css";
import styles from "./index.module.css";
import stylesfull from "./indexfull.module.css";

export default function BlockGallery(props: any) {
	const loadStyle = props.fullscreen ? stylesfull : styles;
	const list = props.list;
	const moreList = props.moreList;
	// Reorder random list
	if (!props.disableRandom) {
		list.sort(() => Math.random() - 0.5);
	}
	// Register props.color to style tag
	let style = "";
	if (props.color) {
		style += `
			.bg-\\[\\${props.color}\\] {
				background-color: ${props.color};
			}
			.text-\\[\\${props.color}\\] {
				color: ${props.color};
			}
		`;
	}

	useEffect(() => {
		const styleTag = document.createElement("style");
		styleTag.innerHTML = style;
		document.head.appendChild(styleTag);

		if (props.hiddenCursor) {
			// Add mousemove event
			window.addEventListener("mousemove", (e) => {
				const cursor = document.querySelector(".cursor");
				if (cursor) {
					(cursor as HTMLElement).style.left = e.clientX + "px";
					(cursor as HTMLElement).style.top = e.clientY + "px";
				}
			});
		}
	}, [props.hiddenCursor, style]);

	const plugins = useMemo(() => [lgZoom, lgVideo, lgRotate], []);
	const mobileSettings = useMemo(
		() => ({
			controls: false,
			showCloseIcon: true,
			rotate: false,
		}),
		[],
	);

	return (
		<section className={`${loadStyle.index} ${props.fullscreen ? "h-[100vh]" : ""} ${props.hiddenCursor ? loadStyle.hiddenCursor : ""}`}>
			{props.hiddenCursor && <div className={`${loadStyle.cursor} cursor`}></div>}
			<div className="mx-auto h-full bg-white">
				<LightGallery
					speed={500}
					plugins={plugins}
					download={true}
					elementClassNames={`${loadStyle.gallery}  bg-[${props.color}] ${props.fullscreen ? "h-[100vh]" : ""}`}
					// Mobile settings
					mobileSettings={mobileSettings}>
					{list.map((item: any, index: number) => (
						<a
							key={index}
							className={`${loadStyle.item} mediamouse group relative lazy ${props.fullscreen ? loadStyle.item_notfcfull : loadStyle.item_notfc}`}
							data-lg-size="3840-2160"
							data-src={item}>
							<div
								className={`mask absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 h-full w-full bg-no-repeat bg-center bg-cover transition-all duration-300 ease-in-out group-hover:scale-110 ${props.grayscale ? "grayscale group-hover:grayscale-0" : ""}`}
								style={{ backgroundImage: `url(${item})` }}></div>
							<div className={`block content-[''] absolute top-0 left-0 w-full h-full transition-all duration-300 ease-in-out bg-[${props.color}] z-10 group-hover:opacity-0 group-hover:z-0 mix-blend-multiply`}></div>
							{moreList.length > 0 && index === list.length - 1 && <span>+{moreList.length}</span>}
						</a>
					))}

					{moreList.map((item: any, index: number) => (
						<a
							key={index}
							className={`${loadStyle.item} group relative lazy hidden`}
							data-lg-size="3840-2160"
							data-src={item}></a>
					))}
				</LightGallery>
			</div>
		</section>
	);
}
