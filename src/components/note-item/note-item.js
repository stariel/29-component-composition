import React from "react";

import NoteUpdateForm from '../note-update-form/note-update-form.js'

export default props => (
  <li>
    <h2>{props.note.title}</h2>
    <button onClick={() => props.onRemove(props.note.id)}>x</button>
    <p>{props.note.content}</p>
    <NoteUpdateForm note={props.note} {...props}/>
  </li>
);