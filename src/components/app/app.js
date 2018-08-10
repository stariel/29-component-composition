import React from 'react';

import NoteCreateForm from '../note-create-form/note-create-form.js';
import NoteList from '../note-list/note-list.js';

import '../../style/main.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

}

addNote(note) {
    let notes = [...this.state.notes, note];
    this.setState({ notes });
}

removeNote(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({notes});
}

updateNote(note) {
    const notes = this.state.notes.filter(n => n.id !== note.id);
    notes.push(note);
    this.setState({notes});
}

  render() {
    return (
        <React.Fragment>
          <NoteCreateForm onSubmit={this.addNote}/>
          <NoteList notes={this.state.notes} onRemove={this.removeNote} onUpdate={this.updateNote}/>
        </React.Fragment>
    );
  }

}