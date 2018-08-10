import React from 'react';
import uuid from 'uuid';

import '../../style/main.scss';

export default class NoteCreateForm extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    title: '',
    content: '',
    editing: false,
    completed: false,
  };

  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);
}

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({ ...this.state, id: uuid() });
    this.setState({
      title: '',
      content: '',
    })
  };

  onChange(event) {
    const val =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    const changedBit = {
      [event.target.name]: val
    };
    this.setState(changedBit);
  };

  render() {
    return(
      <React.Fragment>
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
          <input name="title" placeholder="Title" value={this.state.title}/>
          <input name="content" placeholder="Content" value={this.state.content}/>
          <label>
          <span>editing</span>
          <input name="editing" type="checkbox" />
        </label>
        <label>
          <span>completed</span>
          <input name="completed" type="checkbox" />
        </label>
          <button type='submit'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}