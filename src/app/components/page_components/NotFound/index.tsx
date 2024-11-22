import Link from "next/link";

import BlankLayout from "@/templates/layout-blank";

import notfound from "./notfound.module.scss";

export default function NotFound() {
	return (
		<BlankLayout>
			<section className={`${notfound.root} px-3 lg:px-10`}>
				<div className={`${notfound.main} mx-auto w-full bg-black min-h-full p-10 block`}>
					<div className="container mx-auto max-w-[640px] lg:max-w-[990px] xl:max-w-[1800px] h-full lg:px-10 lg:justify-center lg:flex lg:flex-col">
						<div className="pageerror__content">
							<div className="flex flex-col">
								<svg
									x="0px"
									y="0px"
									className="fill-white max-w-[100px] xl:max-w-[150px] mb-10"
									viewBox="0 0 350.9 120.8">
									<path d="M46.2,87.2L29.7,39.1h-0.2v48.1H9.3v-76h29.9l15.3,45.4h0.2l15.3-45.4h29.3v76H77.9V39.1h-0.2L61.3,87.2H46.2z" />
									<path d="M163.7,73h-30.4L128,87.2h-21.8l30-76.1h25.3l30.2,76.1h-22.8L163.7,73z M139.6,56.1h17.9l-8.6-23.8h-0.3L139.6,56.1z" />
									<path
										d="M271.1,49c0,22.9-15.2,38.1-39.6,38.1h-33.1V11.1h33.1C255.8,11.1,271.1,26.2,271.1,49z M220.2,28.2v42h11.2
									c11,0,16.8-6.6,16.8-21.1c0-14.4-5.9-20.9-16.8-20.9H220.2z"
									/>
									<path d="M280.5,87.2V11.1h60.2v17h-38.3v12.3h33.6v17h-33.6v12.7h39.3v17H280.5z" />
									<rect
										x="9.3"
										y="95.4"
										width="332.5"
										height="17"
									/>
								</svg>
								<div className="flex items-center mt-20">
									<div className="font-6xl">
										<svg
											className="fill-white w-[80px] h-[80px] xl:w-[200px] xl:h-[200px]"
											viewBox="30 60 90 90"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M38.155 140.475L48.988 62.1108L92.869 67.0568L111.437 91.0118L103.396 148.121L38.155 140.475ZM84.013 94.0018L88.827 71.8068L54.046 68.3068L44.192 135.457L98.335 142.084L104.877 96.8088L84.013 94.0018ZM59.771 123.595C59.394 123.099 56.05 120.299 55.421 119.433C64.32 109.522 86.05 109.645 92.085 122.757C91.08 123.128 86.59 125.072 85.71 125.567C83.192 118.25 68.445 115.942 59.771 123.595ZM76.503 96.4988L72.837 99.2588L67.322 92.6168L59.815 96.6468L56.786 91.5778L63.615 88.1508L59.089 82.6988L64.589 79.0188L68.979 85.4578L76.798 81.5328L79.154 86.2638L72.107 90.0468L76.503 96.4988Z"
											/>
										</svg>
									</div>
									<h2 className="my-3 text-3xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-11xl font-normal leading-none flex flex-row xl:ml-5">
										<span>Error 404!</span>
									</h2>
								</div>
								<h2 className="mt-20 font-semkibold leading-none text-3xl mb-3">Page not found!</h2>
								<p className="text-2xl font-light">Please check the URL or use the navigation to find what you are looking for.</p>
								<div className="mt-12">
									<Link
										href="/"
										className="inline-block text-md bg-white text-black py-2 px-5 font-medium ">
										Home Page
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</BlankLayout>
	);
}
