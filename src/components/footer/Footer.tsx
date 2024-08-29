import { useTranslation } from 'react-i18next';
import css from './footer.module.css';
import gmail from '../../assets/contacts/Gmail_Logo_64px.png';
import telegram from '../../assets/contacts/icons8-telegram-48.png';

const Footer = () =>
{
	const { t } = useTranslation();

	return (
		<footer className={css.footer}>
			<div className={`container ${css.footer_content}`}>
				<div className={css.footer__author}>
					&#169;{new Date().getFullYear()} {t('total.surname')} {t('total.name')}
				</div>
				<div className={css.footer__contacts}>
					<a href="mailto:swat55551@gmail.com&body=привет?subject=вопрос-со страницы портфолио" className={css.contact}>
						<img src={gmail} alt='Gmail' />
					</a>
					<a href="https://t.me/Cadet_KHMAIP7" className={css.contact}>
						<img src={telegram} alt='Telegram' />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
