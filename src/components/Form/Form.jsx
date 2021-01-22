import React, { Component } from 'react';
//import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    //id: ''
  };
  handleChange = event => {
    const { name, value } = event.currentTarget;
    console.log({ name, value });
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    //   this.props.onSubmit(this.name, this.number);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder=""
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder=""
            onChange={this.handleChange}
          />
        </label>

        {<button type="submit">Add contact</button>}
      </form>
    );
  }
}

export default Form;
