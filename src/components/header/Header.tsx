import css from "./header.module.css";
import logoEng from "../../assets/logoEng.png";
import logoRu from "../../assets/logoRu.png";
import { useMemo,useState } from "react";
import { Locales } from "../../utils/enums";
import { useTranslation } from "react-i18next";
import Burger from "../burger/Burger";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../mobileMenu/MobileMenu";
import DesktopMenu from "../desktopMenu/DesktopMenu";

const Header = () =>
{
	const isMobile = useMediaQuery({ query: `(max-width:480px)` });
	const [isShowMenu,setShowMenu] = useState<boolean>(false);
	const { t,i18n } = useTranslation();
	const li = useMemo(() => (
		[t("header.myskills"),t("header.projects"),t("header.aboutme")]
	),[i18n.resolvedLanguage]);

	const handleMenu = () =>
	{
		console.log("menu");
		setShowMenu(!isShowMenu);
	};

	return (
		<header className={css.header}>
			<div className={css.header__background}>

			</div>
			<div className={"container " + css.header__content}>
				<a className={css.content_logo}>
					<img src={i18n.resolvedLanguage === Locales.RU ? logoRu : logoEng} alt="logo" />
				</a>
				{
					!isMobile
						?
						<DesktopMenu li={li} />
						:
						<>
							<Burger zIndex={3} onClick={handleMenu} />
							<MobileMenu
								list={li}
								isShow={isShowMenu}
							/>
						</>

				}

			</div>
		</header>
	);
};

export default Header;
