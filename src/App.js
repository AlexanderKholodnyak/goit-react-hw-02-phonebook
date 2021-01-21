import React, { Component } from 'react';
import shortid from 'shortid';
import Section from './components/Section';
import Form from './components/Form';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = data => {
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
    };
    //this.setState(this.prevState =>(name = name));
    this.setState({ name: data.name });
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {/* <ContactList
            contacts={visibleContacts}
            
          /> */}
        </Section>
      </>
    );
  }
}

export default App;
