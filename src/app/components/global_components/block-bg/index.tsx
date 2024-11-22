"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "antd";

import FooterLink from "@/templates/footer-link";

import bg from "./bg.module.scss";

export default function BlockBG(props: any) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate loading delay
		const timer = setTimeout(() => {
			setLoading(false);
		}, 500); // Adjust the delay as needed
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className={bg.root}>
			{loading ? (
				<div className={`container mx-auto max-w-[550px] md:max-w-[650px] xl:max-w-[1230px] px-3 py-9 lg:py-12`}>
					<div className="mx-auto max-w-6xl px-4 sm:px-6">
						<Skeleton
							active
							paragraph={{ rows: 2 }} // Reduced number of rows for optimization
							className="py-10" // Reduced padding for optimization
							round
						/>
					</div>
				</div>
			) : (
				<div className={`bg-white dark:bg-made-400 lg:px-10`}>
					<section
						className={`${bg.animation_carousel_item}`}
						style={{
							backgroundImage: `url(${props.bgImage})`,
						}}>
						<div className={`${bg.animation_carousel_item_text}`}>
							<div className={`${bg.animation_carousel_item_text_cnt}`}>
								<h1 className="text-5xl sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] 3xl:text-[6.5rem] 9xl:text-[8rem] 12xl:text-[9rem] 16xl:text-[13rem] font-medium leading-none tracking-tighter">{props.title}</h1>
								<div className="mt-2 md:pl-1 flex flex-col space-y-3 md:mt-10 3xl:mt-15">
									<div className="font-medium text-md">{props.text}</div>
									<div className="block mt-2 md:mt-0">
										<a
											href={props.buttonLink}
											className="inline-block text-md bg-black text-white py-2 px-5 font-medium dark:bg-white dark:text-black">
											{props.buttonText}
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<FooterLink />
				</div>
			)}
		</div>
	);
}
