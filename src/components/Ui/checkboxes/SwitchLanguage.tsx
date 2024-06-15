import { FC } from "react";


import { Locales } from "../../../utils/enums";
import styles from "./switchlanguage.module.css";
import { useTranslation } from "react-i18next";

const SwitchLanguage: FC<{ defaultLocales: Locales; nextLocales: Locales; }> = ({ defaultLocales,nextLocales }) => 
{
	const { i18n } = useTranslation();


	const changeLanguage = () =>
	{
		if (i18n.resolvedLanguage === defaultLocales)
			i18n.changeLanguage(nextLocales);
		else
			i18n.changeLanguage(defaultLocales);
	};
	return (
		<div className={styles.switch}>
			<input
				id="language-toggle"
				className={`${styles.check_toggle} ${styles.check_toggle_round_flat}`}
				type="checkbox"
				checked={i18n.resolvedLanguage !== defaultLocales}
				onChange={changeLanguage}

			/>
			<label htmlFor="language-toggle"></label>
			<span className={styles.on}>{defaultLocales}</span>
			<span className={styles.off}>{nextLocales}</span>
		</div>
	);
};

export default SwitchLanguage;
