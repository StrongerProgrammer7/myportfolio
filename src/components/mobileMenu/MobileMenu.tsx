import { Locales } from '../../utils/enums';
import SwitchLanguage from '../Ui/checkboxes/SwitchLanguage';
import LiMenu from '../Ui/li/LiMenu/LiMenu';
import Nav from '../Ui/nav/ul/Nav';
import css from './mobilemenu.module.css';

interface IMobileMenu
{
	list: string[];
	isShow: boolean;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
	onAuxClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const MobileMenu: React.FC<IMobileMenu> = ({ list,isShow,onClick,onAuxClick }) =>
{

	return (
		<div className={`${css.mobile_menu} ${isShow ? css.mobile_menu_show : ''}`}>
			<div className={css.mobile_menu__background}></div>
			<Nav classes={
				{
					ul: css.nav_ul,
					nav: css.mobile_menu__nav
				}}>
				{
					list.map((li) =>
					{
						return (
							<LiMenu
								key={`mmli-${li}`}
								title={li}
								classes={{ li: css.nav_ul__li }}
								onClick={onClick}
								onAuxClick={onAuxClick} />
						);
					})
				}
				<LiMenu key={'0x'} title={''}>
					<SwitchLanguage
						nextLocales={Locales.EN}
						defaultLocales={Locales.RU}
					/>
				</LiMenu>
			</Nav>
		</div>
	);
};

export default MobileMenu;
