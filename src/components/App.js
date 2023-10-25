import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { AppWrap, TitleApp, TitleContactList } from "./App.styled";
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {

	state = {
		contacts: [],
		filter: '',
	};

	componentDidMount() {
		const savedContacts = localStorage.getItem('contacts');
		if (savedContacts !== null) {
			this.setState({
				contacts: JSON.parse(savedContacts),
			});
		};
	};

	componentDidUpdate(prevState) {
		if (prevState.contacts !== this.state.contacts) {
			localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
		};
	};

	addContact = values => {
		const contactInput = { id: nanoid(), ...values }
		this.setState(prevState => {
			const existingContact = prevState.contacts.find(contact =>
				contact.firstName === contactInput.firstName);
			if (existingContact) {
				toast.error(`${contactInput.firstName} is already in contacts.`)
			} else {
				return { contacts: [...prevState.contacts, contactInput] };
			}
		});
	};

	deleteContact = contactId => {
		this.setState(prevState => (
			{
				contacts: prevState.contacts.filter(contact =>
					contact.id !== contactId),
			}
		));
	};

	changeFilter = value => {
		this.setState({filter: value,});
	};
	
	render() {
		const { contacts, filter } = this.state;

		const visibleContacts = contacts.filter((contact) =>
			contact.firstName.toLowerCase().includes(filter.toLowerCase()));
		
		return (
			<AppWrap>
				<TitleApp>Phonebook</TitleApp>
				<ContactForm onAddContact={this.addContact} />
				<TitleContactList>Contacts</TitleContactList>
				<Filter filter={filter}
					onChangeFilter={this.changeFilter} />
				<ContactList contacts={visibleContacts}
					onDeleteContact={this.deleteContact} />
				<Toaster />
			</AppWrap>
		);
	};
};
