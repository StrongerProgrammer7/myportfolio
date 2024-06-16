import Dot from "./Dot";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import css from "./dots.module.css";

export default function Dots()
{
	const slidesCount = useTypedSelector((state) => state.slider.items.length);

	const renderDots = () => 
	{
		const dots = [];
		for (let i = 0; i < slidesCount; i++)
		{
			dots.push(<Dot key={`dot-${i}`} number={i} classNames={{ dot: css.dot,selected: css.selected }} />);
		}

		return dots;
	};

	return <div className={css.dots}>{renderDots()}</div>;
}
