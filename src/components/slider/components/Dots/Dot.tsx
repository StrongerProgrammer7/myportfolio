import { useTypedSelector } from "../../../../hooks/useTypedSelector";

interface IDot
{
	number: number;
	classNames:
	{
		dot: string;
		selected: string;
	};
}
export default function Dot({ number,classNames }: IDot) 
{
	const slideNumber = useTypedSelector((state) => state.slider.slide);
	const goToSlide = useTypedSelector((state) => state.slider.goToSlide);


	return (
		<div
			className={`${classNames.dot} ${slideNumber === number ? classNames.selected : ""}`}
			onClick={() => goToSlide?.(number)}
		/>
	);
}
