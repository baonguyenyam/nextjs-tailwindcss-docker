import type { CSSProperties, ElementType, FC, HTMLAttributes, RefAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLElement>, RefAttributes<SVGSVGElement> {
	as?: ElementType;
	style?: CSSProperties;
	className?: string;
}

const Header: FC<HeaderProps> = ({ as: Tag = "header", ...otherProps }) => {
	return (
		<Tag
			{...otherProps}
			role="banner">
			{otherProps.children}
		</Tag>
	);
};

export default Header;
