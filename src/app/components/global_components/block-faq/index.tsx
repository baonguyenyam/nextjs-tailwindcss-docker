import React from "react";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, CollapseProps } from "antd";

import styles from "./index.module.css";

export default function BlockFAQ(props: any) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: props.items.map((item: any) => {
			return {
				"@type": "Question",
				name: item.label,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.children,
				},
			};
		}),
	};
	const script = document.createElement("script");
	script.type = "application/ld+json";
	script.id = "faq-schema";
	if (!document.getElementById("faq-schema")) {
		script.innerHTML = JSON.stringify(schema);
		document.head.appendChild(script);
	}

	const items: CollapseProps["items"] = props.items.map((item: any) => {
		return {
			key: item.key,
			label: (
				<>
					<h3 className={`font-neue-kabel font-bold text-lg lg:text-2xl leading-tight ${props.className}`}>
						<span>
							<FontAwesomeIcon
								icon={faQuestionCircle}
								className="opacity-90 mr-3"
							/>
						</span>
						<span>{item.label}</span>
					</h3>
					<hr className="border-gray-200 border-b mb-0" />
				</>
			),
			children: (
				<div className="font-neue-kabel font-light text-lg 2xl:text-xl font-kabel pb-6">
					<p
						className="leading-tight"
						dangerouslySetInnerHTML={{ __html: item.children }}
					/>
				</div>
			),
			showArrow: item.showArrow,
		};
	});

	return (
		<>
			{props.style && <style>{props.style}</style>}

			<section className={styles.mdl_impressions_title}>
				<div className={styles.mldg1}>
					<div className={styles.linemld1}></div>
					<div className={styles.linemld2}></div>
					<div className={styles.linemld3}></div>
				</div>
				<div className={styles.mldg2}>
					<div className={styles.linemldcontent}>
						<div className={styles.webline1}></div>
						<div className={styles.webline2}></div>
						<div className={styles.webline3}></div>
						<div className={styles.cnth}>
							<h2 className={styles.cnth2}>FAQs</h2>
						</div>
					</div>
				</div>
			</section>

			<section className={`${styles.index} pb-25 px-5 lg:pb-25 xl:pb-[7vw] pt-15 lg:pt-15 xl:pt-[5vw] overflow-hidden`}>
				<div className="container mx-auto max-w-[550px] md:max-w-[900px] mt-5">
					<Collapse
						accordion
						className="p-0"
						bordered={false}
						size="small"
						ghost
						items={items}
					/>
				</div>
			</section>
		</>
	);
}
