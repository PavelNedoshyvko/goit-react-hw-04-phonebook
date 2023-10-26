import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { AppWrap, TitleApp, TitleContactList } from "./App.styled";
import toast, { Toaster } from 'react-hot-toast';


const getInitialContacts = () => {
	const savedContacts = localStorage.getItem('contacts');
	if (savedContacts !== null) {
		return JSON.parse(savedContacts);
	}
	return [];
};

export const App = () => {

	const [contacts, setContacts] = useState(getInitialContacts);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		localStorage.setItem('contacts', JSON.stringify(contacts));
	}, [contacts])

	const addContact = values => {
		const contactInput = { id: nanoid(), ...values }
		setContacts(prevState => {
			const existingContact = prevState.find(contact =>
				contact.firstName === contactInput.firstName);
			if (existingContact) {
				toast.error(`${contactInput.firstName} is already in contacts.`);
				return prevState;
			}
			return [...prevState, contactInput];
		});
	};

	const deleteContact = contactId =>
		setContacts(prevState =>
			(prevState.filter(contact => contact.id !== contactId))
		);

	const changeFilter = value => {
		setFilter(value);
	};

	const visibleContacts = contacts.filter(contact =>
		contact.firstName.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<AppWrap>
			<TitleApp>Phonebook</TitleApp>
			<ContactForm onAddContact={addContact} />
			<TitleContactList>Contacts</TitleContactList>
			<Filter filter={filter}
				onChangeFilter={changeFilter} />
			<ContactList contacts={visibleContacts}
				onDeleteContact={deleteContact} />
			<Toaster />
		</AppWrap>
	);
};