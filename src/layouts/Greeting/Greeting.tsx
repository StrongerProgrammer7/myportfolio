import css from "./greeting.module.css";
import logo from "../../assets/logoEng.png";
import { useTranslation } from "react-i18next";

const Greeting = () => 
{
	const { t } = useTranslation();

	return (
		<section className={css.greeting}>
			<div className={css.greeting__background}>

			</div>
			<div className={"container " + css.greeting_content}>
				<div className={css.greeting_content__logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={css.greeting_content__text}>
					<h1 className={css.greeting_content__text_header}>{t("greeting.hi")},</h1>
					<h1 className={css.greeting_content__text_header}>{t("greeting.name")},</h1>
					<h1 className={css.greeting_content__text_header}>{t("greeting.webdev")},</h1>
					<p className={css.greeting_content__text_paragraph}>Front-end / Back-end {t("total.developer")}</p>
				</div>
			</div>
		</section>
	);
};

export default Greeting;
