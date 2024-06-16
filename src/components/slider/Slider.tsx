import { PropsWithChildren,useEffect,useState } from "react";

import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { setGoToSlide,setSlide } from "../../models/slider";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import css from "./silder.module.css";
import Arrows from "./components/Arrows/Arrows";
import Dots from "./components/Dots/Dots";
import SlidesList from "./components/SlidesList/SlidesList";
import { useMediaQuery } from "react-responsive";


interface ISliderComponent<T> extends PropsWithChildren
{
	width: string;
	height: string;
	autoPlayTime: number;
	autoPlay: boolean;
	data?: T[];
}

const Slider = <T,>({ width = "100%",height = "100%",autoPlay = false,autoPlayTime = 5000,children }: ISliderComponent<T>) =>
{
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' });
	const [isLoad,setIsLoad] = useState<boolean>(true);
	const items = useTypedSelector((state) => state.slider.items);
	const slide = useTypedSelector((state) => state.slider.slide);
	const dispatch = useAppDispatch();
	const [touchPosition,setTouchPosition] = useState<number | null>(null);

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
		setTouchPosition(e.clientX);
	};

	const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) =>
	{
		if (touchPosition === null)
			return;

		const currentPosition = e.clientX;
		const direction = touchPosition - currentPosition;
		console.log(direction);
		const { max_right,max_left } = isTabletOrMobile ? { max_left: -10,max_right: 10 } : { max_left: -100,max_right: 100 };
		if (direction >= max_right || direction <= max_left)
		{
			console.log("RS" + direction);
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
			style={{ width,height }}
			className={css.slider}
			onPointerDown={handlePointerDown}
			onPointerMove={handlePointerMove}
			onPointerUp={handlePointerUp}
		>
			<Arrows changeSlide={changeSlide} />
			<SlidesList>
				{children}
			</SlidesList>
			<Dots />
		</div>
	);
};

export default Slider;
