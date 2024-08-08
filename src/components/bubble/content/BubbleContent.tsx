import React from 'react';
import css from './bubblecontent.module.css';
import { IProject } from '../../../utils/interfaces';
import StackCard from '../../stack_card/StackCard';
import Link from '../../Ui/a/link/Link';

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
							<StackCard
								key={"project-slider-stack-" + ind}
								skill={elem}
							/>

						))
					}
				</div>
				{
					item.link && <Link title='Go to repo' href={item.link} />
				}
			</div>

		</div>
	);
};

export default BubbleContent;
