import { PropsWithChildren } from "react";

interface ISlide extends PropsWithChildren
{
	classNames:
	{
		slide: string;
	};
}

export default function Slide({ children,classNames }: ISlide) 
{
	return (
		<div className={classNames.slide}>
			{children}
		</div>
	);
}
