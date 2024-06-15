import { FC } from "react";
import css from "./simpleradio.module.css";

interface ISimpleRadio
{
	label: string;
	value: string;
	colorText: string;
	defaultChecked?: boolean;
	onChange?: (value: string) => void;
}
const SimpleRadio: FC<ISimpleRadio> = ({ label,value,colorText,defaultChecked,onChange }) => 
{

	return (
		<label className={css.filter_control} style={{ color: colorText }}>
			<input
				value={value}
				type="radio"
				name="type"
				defaultChecked={defaultChecked}
				onChange={() => onChange?.(value)} />
			{label}
		</label>
	);
};

export default SimpleRadio;
