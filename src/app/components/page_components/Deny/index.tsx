"use client";

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RootLayout from "@/templates/layout-root";

import deny from "./deny.module.scss";

export default function Deny() {
	return (
		<RootLayout>
			<div className={deny.root}>
				<div className="mx-auto xl:max-w-[1600px] 6xl:max-w-[2500px] px-3 xl:px-10 py-9 h-full xl:py-12 flex items-center">
					<div className="mx-auto flex flex-col xl:gap-0 bg-white border-gray-400 shadow-lg p-10 rounded-xl items-center justify-center">
						<FontAwesomeIcon
							icon={faExclamationTriangle}
							className="w-12 h-12 text-5xl text-red-500 mb-5"
						/>
						<h2 className="mb-1 text-3xl font-normal leading-loose">Access Denied</h2>
						<div className="mb-5 font-light text-lg">
							<p>You do not have permission to access this page</p>
						</div>
					</div>
				</div>
			</div>
		</RootLayout>
	);
}
