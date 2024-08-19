import { Locales } from '../../utils/enums';
import SwitchLanguage from '../Ui/checkboxes/SwitchLanguage';
import LiMenu from '../Ui/li/LiMenu/LiMenu';
import Nav from '../Ui/nav/ul/Nav';
import css from './desktopmenu.module.css';

interface IDesktopMenu
{
	li: Array<string | number>;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onAuxClick?: (e: React.MouseEvent<HTMLElement>) => void;
}
const DesktopMenu: React.FC<IDesktopMenu> = ({ li,onAuxClick,onClick }) =>
{
	return (
		<div className={css.menu}>
			<Nav>
				{
					li.map((elem) =>
					{
						return <LiMenu
							key={`dml-${elem}`}
							title={elem}
							onClick={onClick}
							onAuxClick={onAuxClick} />;
					})
				}

			</Nav>
			<SwitchLanguage
				nextLocales={Locales.EN}
				defaultLocales={Locales.RU}
			/>
		</div>
	);
};

export default DesktopMenu;
