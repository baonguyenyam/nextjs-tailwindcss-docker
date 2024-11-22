import type { CSSProperties, ElementType, FC, HTMLAttributes, RefAttributes } from "react";

interface FooterProps extends HTMLAttributes<HTMLElement>, RefAttributes<SVGSVGElement> {
	as?: ElementType;
	style?: CSSProperties;
	className?: string;
}

const Footer: FC<FooterProps> = ({ as: Tag = "footer", ...otherProps }) => {
	return (
		<Tag
			{...otherProps}
			role="contentinfo">
			{otherProps.children}
		</Tag>
	);
};

export default Footer;
