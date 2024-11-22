import type { CSSProperties, ElementType, FC, HTMLAttributes, RefAttributes } from "react";

interface MainProps extends HTMLAttributes<HTMLElement>, RefAttributes<SVGSVGElement> {
	as?: ElementType;
	style?: CSSProperties;
	className?: string;
}

const Main: FC<MainProps> = ({ as: Tag = "main", ...otherProps }) => {
	return (
		<Tag
			role="main"
			{...otherProps}>
			{otherProps.children}
		</Tag>
	);
};

export default Main;
