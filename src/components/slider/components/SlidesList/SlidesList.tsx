
import { PropsWithChildren } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import Slide from "./Slide";
import css from './slides.module.css';
import React from "react";

export default function SlidesList({ children }: PropsWithChildren) 
{
	const slideNumber = useTypedSelector((state) => state.slider.slide);
	return (
		<div
			className={css.slide_list}
			style={{ transform: `translateX(-${slideNumber * 100}%)` }}
		>
			{React.Children.map(children,(child,i) => (
				<Slide key={"slide-" + i} classNames={{ slide: css.slide }}> {child}</Slide>))}
		</div>
	);
}
