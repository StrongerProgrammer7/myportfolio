import { PropsWithChildren } from 'react';
import css from './limenu.module.css';

interface ILiMenu extends PropsWithChildren
{
	title: string | number;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onAuxClick?: (e: React.MouseEvent<HTMLElement>) => void;
	classes?:
	{
		a?: string;
		li?: string;
	};
}
const LiMenu: React.FC<ILiMenu> = ({ title,classes,onClick,onAuxClick,children }) =>
{
	return (
		<li className={`${css.li} ${classes?.li ?? ''}`}>
			<a
				onClick={onClick}
				onAuxClick={onAuxClick}
				className={classes?.a ?? ''}>
				{title}
				{children}
			</a>
		</li>
	);
};

export default LiMenu;
