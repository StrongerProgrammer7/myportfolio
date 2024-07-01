import { PropsWithChildren,useEffect,useState } from "react";

import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { setGoToSlide,setSlide } from "../../models/slider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import css from "./silder.module.css";
import Arrows from "./components/Arrows/Arrows";
import Dots from "./components/Dots/Dots";
import SlidesList from "./components/SlidesList/SlidesList";
import { useMediaQuery } from "react-responsive";
import { IProject } from "../../utils/interfaces";


interface ISliderComponent<T> extends PropsWithChildren
{
	items: IProject[];
	width: string;
	height: string;
	autoPlayTime: number;
	autoPlay: boolean;
	data?: T[];
}

const Slider = <T,>({ items,width = "100%",height = "100%",autoPlay = false,autoPlayTime = 5000,children }: ISliderComponent<T>) =>
{
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const [isLoad,setIsLoad] = useState<boolean>(true);
	const slide = useTypedSelector((state) => state.slider.slide);
	const dispatch = useAppDispatch();
	const [touchPosition,setTouchPosition] = useState<number | null>(null);
	const [typeCursor,setTypeCursor] = useState<"default" | "col-resize">("default");

	useEffect(() => 
	{
		dispatch(setGoToSlide(goToSlide));
		setIsLoad(false);
	},[]);

	const changeSlide = (direction = 1) =>
	{
		let slideNumber = 0;

		if (slide + direction < 0)
			slideNumber = items.length - 1;
		else
			slideNumber = (slide + direction) % items.length;

		dispatch(setSlide(slideNumber));
	};

	const goToSlide = (number: number) => dispatch(setSlide(number % items.length));

	const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) =>
	{
		setTypeCursor("col-resize");
		setTouchPosition(e.clientX);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) =>
	{
		if (touchPosition === null)
			return;

		const currentPosition = e.clientX;
		const direction = touchPosition - currentPosition;

		const { max_right,max_left } = isTabletOrMobile ? { max_left: -10,max_right: 10 } : { max_left: -100,max_right: 100 };
		if (direction >= max_right || direction <= max_left)
		{
			if (direction >= 10)
				changeSlide(1);
			else
				changeSlide(-1);
			setTouchPosition(null);
		}
	};

	const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) =>
	{
		e.stopPropagation();
		if (touchPosition !== null)
			setTouchPosition(null);
		setTypeCursor("default");
	};

	useEffect(() =>
	{
		if (!autoPlay) return;

		const interval = setInterval(() =>
		{
			changeSlide(1);
		},autoPlayTime);

		return () =>
		{
			clearInterval(interval);
		};
	},[items.length,slide]);

	if (isLoad)
		return <div>Loading...</div>;
	return (
		<div
			style={{ width,height,cursor: typeCursor }}
			className={css.slider}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
		>
			<Arrows changeSlide={changeSlide} />
			<SlidesList>
				{children}
			</SlidesList>
			<Dots
				slidesCount={items.length}
			/>
		</div>
	);
};

export default Slider;
