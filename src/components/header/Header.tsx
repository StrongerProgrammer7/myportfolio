import css from "./header.module.css";
import logoEng from "../../assets/logoEng.png";
import logoRu from "../../assets/logoRu.png";
import Nav from "../Ui/ul/Nav";
import { useMemo } from "react";
import SwitchLanguage from "../Ui/checkboxes/SwitchLanguage";
import { Locales } from "../../utils/enums";
import { useTranslation } from "react-i18next";

const Header = () =>
{
	const { t,i18n } = useTranslation();
	const li = useMemo(() => (
		[t("header.myskills"),t("header.projects"),t("header.aboutme")]
	),[i18n.resolvedLanguage]);

	return (
		<header className={css.header}>
			<div className={css.header__background}>

			</div>
			<div className={"container " + css.header__content}>
				<a className={css.content_logo}>
					<img src={i18n.resolvedLanguage === Locales.RU ? logoRu : logoEng} alt="logo" />
				</a>
				<Nav list={li} />
				<SwitchLanguage
					nextLocales={Locales.EN}
					defaultLocales={Locales.RU}
				/>
			</div>
		</header>
	);
};

export default Header;
