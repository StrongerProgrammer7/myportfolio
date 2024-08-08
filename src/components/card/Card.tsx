import React from 'react';
import css from './card.module.css';
import { IProject } from '../../utils/interfaces';
import StackCard from '../stack_card/StackCard';
import Link from '../Ui/a/link/Link';

interface ICard
{
	item: IProject;
}
const Card: React.FC<ICard> = ({ item }) => 
{

	return (
		<div className={css.card}>
			{item.img && <div className={css.card__wrapper_img}>
				<img src={item.img}
					alt='project' />
			</div>}
			<h2 className={css.card__title}>{item.briefly_name ?? item.name}</h2>
			<div className={css.card__content}>
				<p className={css.content_text}>{item.description}</p>
				<div className={css.content__stack}>
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
					item.link && <Link title='Go to repo' href={item.link} extraClass={css.content__link} />
				}
			</div>
		</div>
	);
};

export default Card;
