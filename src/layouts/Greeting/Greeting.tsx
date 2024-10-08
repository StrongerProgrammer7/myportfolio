import css from "./greeting.module.css";
import logo from "../../assets/logoEng.png";
import logoRU from "../../assets/logoRu.png";
import { useTranslation } from "react-i18next";
import Pattern from "../../components/pattern/Pattern";
import background from "../../assets/greeting.jpg";
import { Locales } from "../../utils/enums";

const Greeting = () => 
{
	const { t,i18n } = useTranslation();

	return (
		<Pattern
			img={background}
			classNames={
				{
					background: css.greeting__background,
					block_content: css.greeting_content
				}
			}
		>
			<div className={css.greeting_content__logo}>
				<img src={i18n.resolvedLanguage === Locales.RU ? logoRU : logo} alt="logo" />
			</div>
			<div className={css.greeting_content__text}>
				<h1 className={css.greeting_content__text_header_greeting}>{t("greeting.hi")},</h1>
				<h1 className={css.greeting_content__text_header_name}>{t("greeting.name")},</h1>
				<h1 className={css.greeting_content__text_header_position}>{t("greeting.webdev")},</h1>
				<p className={css.greeting_content__text_paragraph}>Front-end / Back-end {t("total.developer")}</p>
			</div>
		</Pattern>

	);
};

export default Greeting;
