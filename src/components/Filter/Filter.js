import { FilterFieldInput, FilterLabel } from "./Filter.styled";

export const Filter = ({filter, onChangeFilter}) => {
	return (
		<div>
			<FilterLabel htmlFor="findContacts">Find contacts by name</FilterLabel>
			<FilterFieldInput type="text" name="findContacts" value={filter}
				onChange={evt => onChangeFilter(evt.target.value)} />
		</div>
	);
};