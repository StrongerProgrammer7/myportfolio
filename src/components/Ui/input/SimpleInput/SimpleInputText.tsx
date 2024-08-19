import { ChangeEventHandler,FC,useCallback } from 'react';
import { ReactSVG } from 'react-svg';
import css from "./simpleinput.module.css";
import search from "../../../../assets/search.svg";
import clear from "../../../../assets/close.svg";

import useDebounce from '../../../../hooks/useDebounce';

interface ISimpleInputText
{
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	setText: React.Dispatch<React.SetStateAction<string>>;
	width?: number;
}
const SimpleInputText: FC<ISimpleInputText> = ({ value,placeholder,onChange,setText,width }) => 
{

	const debounced = useCallback(useDebounce(onChange,500),[]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | undefined,isClear = false) =>
	{
		if (isClear)
		{
			setText("");
			debounced("");
			return;
		}
		if (!e || !e.target)
			return;
		setText(e.target.value);
		debounced(e.target.value);
	};
	return (
		<div className={css.skills_controls__searching} style={{ width: width }}>
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				className={css.searching_input}
				onChange={handleChange}
			/>
			{
				<ReactSVG src={search} className={`${css.searching_icon} ${css.icon_search} ${value === "" ? css.icon_view : ""}`} wrapper="span" />
			}
			{
				<ReactSVG
					src={clear} className={`${css.searching_icon} ${css.icon_close} ${value !== "" ? css.icon_view : ""}`}
					wrapper="span"
					onClick={() => handleChange(undefined,true)} />
			}

		</div>
	);
};

export default SimpleInputText;
