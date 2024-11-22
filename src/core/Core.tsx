import type { CSSProperties, ElementType, FC, HTMLAttributes, RefAttributes } from "react";

interface CoreProps extends HTMLAttributes<HTMLElement>, RefAttributes<SVGSVGElement> {
	as?: ElementType;
	style?: CSSProperties;
	className?: string;
}

const Core: FC<CoreProps> = ({ as: Tag = "div", ...otherProps }) => {
	return (
		<Tag
			{...otherProps}
			role="main">
			{otherProps.children}
		</Tag>
	);
};

export default Core;
