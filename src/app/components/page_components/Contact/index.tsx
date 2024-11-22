"use client";

import React, { useCallback, useEffect, useState } from "react";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Turnstile } from "@marsidev/react-turnstile";
import { Modal } from "antd";

import { site } from "@/app/const/const";
import { setPageSchema } from "@/app/lib/utils";
import NGUYEN_MAP from "@/app/modules/Map";
import RootLayout from "@/templates/layout-root";

import contact from "./contact.module.scss";

export default function Contact(props?: any) {
	const [isModalOpen, setIsModalOpen] = useState("");
	const meta = props?.metadata;

	async function handleSubscribe(event: any) {
		event.preventDefault();
		const formData = new FormData(event.target);
		console.log("formData", formData);
		// TODO: Add form submission logic
	}

	const clickMap = useCallback((props: any, type: string) => {
		if (type === "google") {
			window.location.href = props.map_url;
		} else {
			window.location.href = `http://maps.apple.com/?ll=${props.map_lat},${props.map_lng}&address=${props.address}`;
		}
	}, []);

	useEffect(() => {
		setPageSchema({
			breadcrumb: meta?.title,
			title: meta?.title,
			description: meta?.description,
			openGraph: meta?.openGraph?.images[0],
			url: meta?.url,
		});
	}, [meta]);

	return (
		<RootLayout>
			<div className={`px-3 lg:px-10 ${contact.root}`}>
				<div className="mx-auto w-full py-9 h-full xl:py-12 flex items-center min-h-[60vh] my-15 lg:my-30">
					<div className="mx-auto grid grid-cols-1 xl:grid-cols-11 gap-10 xl:gap-0 w-full">
						<div className="xl:col-span-6 3xl:col-span-4 order-2 xl:order-1 text-sm">
							<div
								id="crmWebToEntityForm"
								className="crmWebToEntityForm">
								<form
									onSubmit={handleSubscribe}
									className="w-full mx-auto">
									<div className="mb-5 grid grid-cols-2 gap-5">
										<div className="itm">
											<label
												htmlFor="First_Name"
												className="block mb-2 font-medium text-sm dark:text-made-200">
												First Name
											</label>
											<input
												type="text"
												id="First_Name"
												name="firstName"
												className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></input>
										</div>
										<div className="itm">
											<label
												htmlFor="Last_Name"
												className="block mb-2 font-medium text-sm dark:text-made-200">
												Last Name
											</label>
											<input
												type="text"
												id="Last_Name"
												name="lastName"
												className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></input>
										</div>
									</div>

									<div className="mb-5 grid grid-cols-2 gap-5">
										<div className="itm">
											<label
												htmlFor="Email"
												className="block mb-2 font-medium text-sm dark:text-made-200">
												Email
											</label>
											<div
												dangerouslySetInnerHTML={{
													__html: `<input type="text" ftype="email" id="Email" name="Email" class="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></input>`,
												}}
											/>
										</div>
										<div className="itm">
											<label
												htmlFor="Phone"
												className="block mb-2 font-medium text-sm dark:text-made-200">
												Phone
											</label>
											<input
												type="text"
												id="Phone"
												name="Phone"
												className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></input>
										</div>
									</div>

									<div className="mb-5 grid grid-cols-2 gap-5">
										<div className="itm">
											<label
												className="block mb-2 font-medium text-sm dark:text-made-200"
												htmlFor="CONTACTCF19">
												State
											</label>
											<div className="relative">
												<select
													className="!bg-none appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"
													name="CONTACTCF19"
													id="CONTACTCF19"
													required>
													<option value="-None-">- None -</option>
													<option value="AL">Alabama</option>
													<option value="AK">Alaska</option>
													<option value="AZ">Arizona</option>
													<option value="AR">Arkansas</option>
													<option value="CA">California</option>
													<option value="CO">Colorado</option>
													<option value="CT">Connecticut</option>
													<option value="DE">Delaware</option>
													<option value="DC">District Of Columbia</option>
													<option value="FL">Florida</option>
													<option value="GA">Georgia</option>
													<option value="HI">Hawaii</option>
													<option value="ID">Idaho</option>
													<option value="IL">Illinois</option>
													<option value="IN">Indiana</option>
													<option value="IA">Iowa</option>
													<option value="KS">Kansas</option>
													<option value="KY">Kentucky</option>
													<option value="LA">Louisiana</option>
													<option value="ME">Maine</option>
													<option value="MD">Maryland</option>
													<option value="MA">Massachusetts</option>
													<option value="MI">Michigan</option>
													<option value="MN">Minnesota</option>
													<option value="MS">Mississippi</option>
													<option value="MO">Missouri</option>
													<option value="MT">Montana</option>
													<option value="NE">Nebraska</option>
													<option value="NV">Nevada</option>
													<option value="NH">New Hampshire</option>
													<option value="NJ">New Jersey</option>
													<option value="NM">New Mexico</option>
													<option value="NY">New York</option>
													<option value="NC">North Carolina</option>
													<option value="ND">North Dakota</option>
													<option value="OH">Ohio</option>
													<option value="OK">Oklahoma</option>
													<option value="OR">Oregon</option>
													<option value="PA">Pennsylvania</option>
													<option value="RI">Rhode Island</option>
													<option value="SC">South Carolina</option>
													<option value="SD">South Dakota</option>
													<option value="TN">Tennessee</option>
													<option value="TX">Texas</option>
													<option value="UT">Utah</option>
													<option value="VT">Vermont</option>
													<option value="VA">Virginia</option>
													<option value="WA">Washington</option>
													<option value="WV">West Virginia</option>
													<option value="WI">Wisconsin</option>
													<option value="WY">Wyoming</option>
												</select>
												<div className="pointer-events-none absolute inset-y-0 right-2 flex items-center pl-2 text-black dark:text-made-200">
													<svg
														className="fill-current h-4 w-4"
														xmlns="http://www.w3.org/2000/svg"
														viewBox="0 0 20 20">
														<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
													</svg>
												</div>
											</div>
										</div>
										<div className="itm">
											<label
												htmlFor="Account_name"
												className="block mb-2 font-medium text-sm dark:text-made-200">
												Company Name
											</label>
											<div
												dangerouslySetInnerHTML={{
													__html: `<input type="text" id="Account_name" name="AccountName"  class="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></input>`,
												}}
											/>
										</div>
									</div>

									<div className="row mb-5">
										<label
											htmlFor="Description"
											className="block mb-2 font-medium text-sm dark:text-made-200">
											Description
										</label>
										<textarea
											id="Description"
											name="Description"
											className="appearance-none border border-gray-400 py-1 px-2 text-sm font-light w-[100%] rounded-none outline-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:bg-made-300 dark:text-made-0 dark:border-made-300 dark:focus:ring-made-50"></textarea>
									</div>
									{/* <Turnstile
										siteKey="123456789"
										className="mb-5"
										options={{
											action: "submit-form",
											size: "invisible",
											theme: theme === "dark" ? "dark" : "light",
										}}
									/> */}

									<div className="row mb-10">
										<button
											type="submit"
											id="formsubmit"
											className="inline-block text-md bg-black text-white py-2 px-5 font-medium dark:bg-white dark:text-black">
											Submit
										</button>
									</div>
								</form>
							</div>

							<hr className="my-5 dark:border-made-300" />
							<div className="text-xs text-stone-400 font-light flex dark:text-made-200">This site is protected by Turnstile and the Cloudflare Privacy Policy and Terms of Service apply.</div>
						</div>
						<div className="xl:col-span-5 3xl:col-span-7 xl:pl-20 items-center order-1 xl:order-2">
							<h1 className="text-4xl xl:text-5xl 5xl:text-7xl 7xl:text-8xl 12xl:text-10xl font-medium leading-tight xl:leading-none tracking-tighter lg:-mt-1 xl:-mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus nisi quidem quis veritatis similique a saepe officiis. Ad rem totam iure quas optio numquam assumenda, expedita explicabo inventore consectetur placeat?</h1>
						</div>
					</div>
				</div>

				<section className={`border-2 border-stone-200 min-h-[400px]`}>
					<NGUYEN_MAP
						width={`100%`}
						height={`600px`}
						lat={site.seo.map_lat}
						lng={site.seo.map_lng}
						zoom={18}
						styles={{
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
						}}
						marker={{
							url: site.seo.map_logo,
							size: [120, 43],
							anchor: [56, 0],
						}}
						onClick={() => setIsModalOpen("logodaddy")}
						onLoad={() => {
							// Hide #mapframe
							const mapframe = document.getElementById("mapframe") as HTMLIFrameElement;
							mapframe.style.display = "none";
						}}
					/>
					<iframe
						id="mapframe"
						title="MAP"
						className={`w-full border h-[400px] !overflow-hidden grayscale`}
						src={site.seo.map_iframe}></iframe>
					<Modal
						title={false}
						open={isModalOpen === "logodaddy"}
						onCancel={() => setIsModalOpen("")}
						footer={null}
						centered
						keyboard={false}
						width={600}
						maskClosable={false}>
						<div className="p-3">
							<img
								src={site.seo.map_logo}
								alt={site.name}
								className="max-w-[200px] h-auto"
							/>
							<h3 className="mt-5 text-2xl font-medium leading-none text-gray-900 uppercase">{site.name}</h3>
							<p className="text-lg truncate">
								<span>{site.address}</span>
							</p>
							<div className="mt-3">
								<div className="space-x-2 flex flex-row">
									<div
										onClick={() => clickMap(site.seo, "google")}
										className="font-semibold underline hover:text-black cursor-pointer">
										<FontAwesomeIcon
											icon={faLocationDot}
											className="mr-1"
										/>
										<span>Google Maps</span>
									</div>
									<div
										onClick={() => clickMap(site.seo, "apple")}
										className="font-semibold underline hover:text-black cursor-pointer">
										<FontAwesomeIcon
											icon={faApple}
											className="mr-1"
										/>
										<span>Apple Maps</span>
									</div>
								</div>
							</div>
						</div>
					</Modal>
				</section>
			</div>
		</RootLayout>
	);
}
