import { FC,PropsWithChildren } from "react";
import css from "./circlebubble.module.css";

interface ICircleProject extends PropsWithChildren
{
	titleProject: string;
}
const CircleBubble: FC<ICircleProject> = ({ titleProject,children }) =>
{
	const textLength = titleProject.length;
	const characters = titleProject.split('');
	const countWords = titleProject.trim().split(' ').length;
	const startStep = countWords > 1 ? 100 : 80;
	const angleStep = startStep / (textLength - 0.5);
	const startAngle = countWords > 1 ? 300 : 320;

	return (
		<div className={css.circle}>
			<h2 className={css.circle__title}>{characters.map((char,index) =>
			{
				const angle = startAngle + (index * angleStep);
				const style = {
					transform: `rotate(${angle}deg) translate(0px, -290px) rotate(-${angle}deg)`,
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

export default CircleBubble;
