import css from "./greeting.module.css";
import logo from "../../assets/logoEng.png";

const Greeting = () => 
{
	return (
		<section className={css.greeting}>
			<div className={css.greeting__background}>

			</div>
			<div className={"container " + css.greeting_content}>
				<div className={css.greeting_content__logo}>
					<img src={logo} alt="logo" />
				</div>
				<div className={css.greeting_content__text}>
					<h1 className={css.greeting_content__text_header}>Hi,</h1>
					<h1 className={css.greeting_content__text_header}>I'm Zufar,</h1>
					<h1 className={css.greeting_content__text_header}>web developer,</h1>
					<p className={css.greeting_content__text_paragraph}>Front-end / Back-end developer</p>
				</div>
			</div>
		</section>
	);
};

export default Greeting;
