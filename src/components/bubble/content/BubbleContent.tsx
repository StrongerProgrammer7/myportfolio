import React from 'react';
import css from './bubblecontent.module.css';
import { IProject } from '../../../utils/interfaces';

interface IBubbleContent
{
	item: IProject;
}
const BubbleContent: React.FC<IBubbleContent> = ({ item }) =>
{
	return (
		<div className={css.circle__content}>
			<div className={css.circle__content_wrapper}>
				<h3 className={css.circle__title}>{item.name}</h3>
				<p className={css.circle__content_text}>{item.description}</p>
				<div className={css.circle__content_stack}>
					{
						item.stack.map((elem,ind) => (
							<span
								key={"project-slider-stack-" + ind}
								className={elem.type === "front" ? css.card_front : css.default_background}>
								{elem.name}</span>
						))
					}
				</div>
				{
					item.link &&
					<a className={css.circle__content_btn} href={item.link}> More info </a>
				}
			</div>

		</div>
	);
};

export default BubbleContent;
