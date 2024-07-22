import { useState } from 'react';
import css from './burger.module.css';

interface IBurger
{
	zIndex?: number;
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
const Burger: React.FC<IBurger> = ({ zIndex = 1,onClick }) =>
{
	const [isClick,setClick] = useState<boolean>(false);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>
	{
		setClick(!isClick);
		onClick(e);
	};
	return (
		<div style={{ zIndex: zIndex }} onClick={handleClick} className={`${isClick ? css.burger_click : ""} ${css.burger}`}></div>
	);
};

export default Burger;
