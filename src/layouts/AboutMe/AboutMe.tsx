import background from '../../assets/deep.png';
import css from './aboutme.module.css';
import Pattern from '../../components/pattern/Pattern';
import { useTranslation } from 'react-i18next';
const AboutMe = () => 
{
	const { t } = useTranslation();

	return (
		<Pattern
			title={t('header.aboutme')}
			img={background}
			classNames={
				{
					block_content: css.aboutme__content
				}
			}
		>
			<div className={css.aboutme__wrapper}>
				<div className={css.aboutme__card}>
					<h2>{t('aboutme.history.title')}</h2>
					<p>{t('aboutme.history.text')}</p>
				</div>
				<div className={css.aboutme__card}>
					<h2>{t('aboutme.study.title')}</h2>
					<p>{t('aboutme.study.text')}</p>
				</div>
				<div className={css.aboutme__card}>
					<h2>{t('aboutme.goal.title')}</h2>
					<p>{t("aboutme.goal.text")}</p>
				</div>
			</div>

		</Pattern>
	);
};

export default AboutMe;
