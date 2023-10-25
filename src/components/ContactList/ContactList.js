import { DeleteBtn, ListItem } from "./ConatctList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => {
	return (
		<ul>
			{contacts.map(({ id, firstName, tel }) =>
				<ListItem key={id}>{firstName}: {tel}
					<DeleteBtn type="button"
						onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
				</ListItem>)}
		</ul>
	);
};