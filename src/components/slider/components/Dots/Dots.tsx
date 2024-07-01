import Dot from "./Dot";
import css from "./dots.module.css";

interface IDots
{
	slidesCount: number;
}
export default function Dots({ slidesCount }: IDots)
{
	return <div className={css.dots}>
		{
			new Array(slidesCount).fill(0).map((_,ind) =>
			{
				return <Dot key={`dot-${ind}`} number={ind} classNames={{ dot: css.dot,selected: css.selected }} />;
			})
		}
	</div>;
}
