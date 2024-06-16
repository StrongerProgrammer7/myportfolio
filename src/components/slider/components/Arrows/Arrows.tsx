import css from "./arrows.module.css";

const Arrows = ({ changeSlide }: { changeSlide: (direction: number) => void; }) => 
{
	return (

		<div>
			<div className={` ${css.arrow} ${css.arrow_left}`} onClick={() => changeSlide(-1)} />

			<div className={` ${css.arrow} ${css.arrow_right}`} onClick={() => changeSlide(1)} />
		</div>
	);
};

export default Arrows;
