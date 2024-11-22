import React, { useCallback, useEffect, useMemo, useState } from "react";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal, Popover } from "antd";
import Image from "next/image";
import Link from "next/link";

import NGUYEN_MAP from "@/app/modules/Map";

import styles from "./index.module.css";

export default function BlockMap(props: any) {
	const [isModalOpen, setIsModalOpen] = useState("");

	const clickMap = useCallback((props: any, type: string) => {
		if (type === "google") {
			window.location.href = props.url;
		} else {
			window.location.href = `http://maps.apple.com/?ll=${props.lat},${props.lng}&address=${props.address}`;
		}
	}, []);

	// Register props.color to style tag
	let style = "";
	if (props.color) {
		style += `
			.bg-\\[\\${props.bg}\\] {
				background-color: ${props.bg};
			}
			.text-\\[\\${props.color}\\] {
				color: ${props.color};
			}
			.bg-button-\\[\\${props.button.bg}\\] {
				background-color: ${props.button.bg};
			}
			.text-button-\\[\\${props.button.color}\\] {
				color: ${props.button.color};
			}
			.bg-modal-\\[\\${props.modal.bg}\\] {
				background-color: ${props.modal.bg};
			}
			.text-modal-\\[\\${props.modal.color}\\] {
				color: ${props.modal.color};
			}
		`;
	}

	useEffect(() => {
		const styleTag = document.createElement("style");
		styleTag.innerHTML = style;
		document.head.appendChild(styleTag);
	}, [style]);

	const memoizedStyles = useMemo(
		() => ({
			featureType: "all",
			elementType: "all",
			stylers: [
				{
					saturation: -100,
				},
				{
					gamma: 0.5,
				},
			],
		}),
		[],
	);

	const memoizedMarker = useMemo(
		() => ({
			url: props.logo.url,
			size: props.logo.size,
			anchor: props.logo.anchor,
		}),
		[props.logo],
	);

	const handleMapClick = useCallback(() => {
		setIsModalOpen("_mapopen");
	}, []);

	// Memoize the content for the Popover
	const popoverContent = useMemo(
		() => (
			<div className="max-w-[300px]">
				{props.img && (
					<Image
						src={props.img}
						alt={props.title}
						width={800}
						height={600}
						className="max-w-[300px] h-36 object-cover"
					/>
				)}
				<p className="text-xs text-gray-700 my-1">{props?.description || props.address}</p>
				<div className="space-x-2 flex flex-row">
					<div
						onClick={() => clickMap(props, "google")}
						className="font-semibold underline hover:text-black cursor-pointer">
						<FontAwesomeIcon
							icon={faLocationDot}
							className="mr-1"
						/>
						<span>Google Maps</span>
					</div>
					<div
						onClick={() => clickMap(props, "apple")}
						className="font-semibold underline hover:text-black cursor-pointer">
						<FontAwesomeIcon
							icon={faApple}
							className="mr-1"
						/>
						<span>Apple Maps</span>
					</div>
				</div>
			</div>
		),
		[props, clickMap],
	);

	return (
		<>
			<section className={`${styles.index} ${props.className} bg-slate-100 flex flex-col lg:flex-row`}>
				<NGUYEN_MAP
					width={`100%`}
					height={`600px`}
					lat={props.lat}
					lng={props.lng}
					zoom={props.zoom || 16}
					styles={memoizedStyles}
					marker={memoizedMarker}
					onClick={handleMapClick}
				/>
				<Modal
					title={false}
					open={isModalOpen === "_mapopen"}
					onCancel={() => setIsModalOpen("")}
					footer={null}
					centered
					keyboard={false}
					width={600}
					wrapClassName="map-modal"
					maskClosable={false}>
					<div className="p-5">
						<img
							src={props.logo.url}
							alt={props.title}
							className="max-w-[200px] h-auto"
						/>
						<div className="mt-3">
							<p className="text-xs text-gray-700 my-1">{props?.description || props.address}</p>
							<div className="space-x-2 flex flex-row">
								<div
									onClick={() => clickMap(props, "google")}
									className="font-semibold underline hover:text-black cursor-pointer">
									<FontAwesomeIcon
										icon={faLocationDot}
										className="mr-1"
									/>
									<span>Google Maps</span>
								</div>
								<div
									onClick={() => clickMap(props, "apple")}
									className="font-semibold underline hover:text-black cursor-pointer">
									<FontAwesomeIcon
										icon={faApple}
										className="mr-1"
									/>
									<span>Apple Maps</span>
								</div>
							</div>
						</div>
						{props.enableframe && (
							<iframe
								title={props.title}
								className={`mt-10 w-full border h-[300px] !overflow-hidden border-solid border-t-2 border-b-2 border-gray-400`}
								src={props.frame}></iframe>
						)}
					</div>
				</Modal>
				<div className={`${styles.content} bg-[${props.bg}] text-[${props.color}] lg:min-w-[500px] 3xl:min-w-[650px] 2xl:p-5 4xl:p-7 6xl:p-9`}>
					<div className="container py-15 px-5 xl:p-10 mx-auto">
						<h2 className="text-xl md:text-2xl font-bold">EVENT ADDRESS</h2>
						<hr className="opacity-30 my-3" />
						<h3 className="text-xl md:text-2xl font-bold mb-1">{props.title}</h3>
						<Popover
							content={popoverContent}
							// Position of the popover
							placement="topLeft"
							title={<h3 className="font-semibold text-lg">{props.title}</h3>}
							trigger="hover">
							<div className="underline cursor-pointer">
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									className="h-5 w-5 mr-2 mt-1"
								/>
								{props.address}
							</div>
						</Popover>
						{!props.disableLooking && (
							<>
								<h2 className="text-xl md:text-2xl font-bold mt-15">LOOKING FOR PLACES TO STAY?</h2>
								<hr className="opacity-30 my-3" />
								<p className="font-light text-md md:text-lg">If you're coming from out of town or would just prefer to stay closer to the event for a discounted rate click the link below.</p>
							</>
						)}
						{props.addons && props.addons.length > 0 && (
							<div
								className="mt-5 font-light"
								dangerouslySetInnerHTML={{ __html: props.addons }}></div>
						)}
						<p className="mt-10">
							{props.button.enable && (
								<Link
									type="button"
									className={`${styles.brtn} bg-button-[${props.button.bg}] text-button-[${props.button.color}] group font-bold inline-block w-fit tracking-wide items-center !border-0 py-3 px-10 uppercase`}
									href={props.button.url}>
									{props.button.text}
								</Link>
							)}
							{props.modal.enable && (
								<button
									type="button"
									className={`${styles.brtn} group bg-modal-[${props.modal.bg}] text-modal-[${props.modal.color}] font-bold inline-block w-fit tracking-wide items-center !border-0 py-3 px-10 uppercase`}
									onClick={() => (isModalOpen ? setIsModalOpen("") : setIsModalOpen("mapselect"))}>
									{props.modal.text} ({props.modal.locations.length})
								</button>
							)}
						</p>
						<Modal
							title={false}
							open={isModalOpen === "mapselect"}
							onCancel={() => setIsModalOpen("")}
							footer={null}
							centered
							keyboard={false}
							width={600}
							maskClosable={false}>
							<div className="p-3">
								<div className="flex items-center justify-between border-b-2 pb-5 border-gray-300">
									<h5 className="text-xl font-medium leading-none text-gray-900">{props.modal.text}</h5>
								</div>
								<div className="flow-root">
									<ul className="divide-y divide-gray-300">
										{props.modal.locations.map((item: any, index: number) => (
											<li
												key={index}
												className="py-3 sm:py-4">
												<div className="flex items-center space-x-4">
													<div className="flex-shrink-0 border bg-gray-100 border-gray-300 rounded-full w-12 h-12 flex justify-center items-center">
														<FontAwesomeIcon
															icon={faMapMarkerAlt}
															className="h-5 w-5"
														/>
													</div>
													<div className="flex-1 min-w-0">
														<p className="text-xl font-bold uppercase text-gray-900">{item.name}</p>
														<p className="text-sm text-gray-500">
															<Link
																href={item.url}
																target="_blank"
																className="!border-0 !text-black font-light text-md md:text-lg flex underline">
																{" "}
																<span>{item.address}</span>
															</Link>
														</p>
														{item.call && (
															<p className="text-sm text-gray-500 truncate flex flex-row items-center mb-3">
																<div className="text-black mr-2 text-lg">{item.call_text}</div>
																<Link
																	href={`tel:${item.call}`}
																	className="!border-0 !text-black font-medium text-md md:text-lg flex">
																	{" "}
																	<span>{item.call}</span>
																</Link>
															</p>
														)}
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
						</Modal>
					</div>
				</div>
			</section>
		</>
	);
}
