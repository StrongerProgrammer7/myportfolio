import Dot from "./Dot";
import css from "./dots.module.css";

interface IDots
{
	slidesCount: number;
}
export default function Dots({ slidesCount }: IDots)
{

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
