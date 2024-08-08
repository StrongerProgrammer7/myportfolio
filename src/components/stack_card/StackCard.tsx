import React from 'react';
import { ISkill } from '../../utils/interfaces';
import css from './stackcard.module.css';

const StackCard: React.FC<{ skill: ISkill; }> = ({ skill }) =>
{
	return (
		<span
			className={skill.type === "front" ?
				css.card_front
				:
				css.default_background}>
			{skill.name}</span>
	);
};

export default StackCard;
