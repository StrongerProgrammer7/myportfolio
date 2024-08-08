import { FC,PropsWithChildren } from "react";
import css from "./bubble.module.css";
import { useMediaQuery } from "react-responsive";

interface IBubble extends PropsWithChildren
{
	title: string;
}
const Bubble: FC<IBubble> = ({ title,children }) =>
{
	const isTableOrMobile = useMediaQuery({ query: '(max-width: 700px)' });
	const distentionBetweenLetter = isTableOrMobile ? 125 : 165;
	const textLength = title.length;
	const characters = title.split('');
	const countWords = title.trim().split(' ').length;
	const startStep = countWords > 1 ? distentionBetweenLetter : 80;
	const angleStep = startStep / (textLength - 1);
	const startAngle = countWords > 1 ? 290 : 320;

	return (
		<div className={css.circle}>
			<h2 className={css.circle__title}>{characters.map((char,index) =>
			{
				const angle = startAngle + (index * angleStep);
				const angleDistentionBetweenLetter = isTableOrMobile ? -230 : -290;
				const style = {
					transform: `rotate(${angle}deg) translate(0px, ${angleDistentionBetweenLetter}px) rotate(-${angle}deg)`,
					transformOrigin: 'center center',
				};

				return (
					<span key={index} style={style} className={css.circle_text}>
						{char}
					</span>
				);
			})}</h2>
			<div className={css.circle__bubble}>
				{children}
			</div>
		</div>
	);
};

export default Bubble;
