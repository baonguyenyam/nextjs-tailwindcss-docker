"use client";

import Link from "next/link";

export default function FooterLink() {
	return (
		<div className={`mt-2`}>
			<div className="flex flex-col lg:flex-row">
				<div className="lg:ml-auto basis-1/3 text-xs flex flex-col items-center lg:items-end">
					<p className="font-medium">
						© {new Date().getFullYear()} Nguyen Pham /{" "}
						<Link
							href="/privacy"
							className="border-b border-black dark:border-white">
							Privacy Policy
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
