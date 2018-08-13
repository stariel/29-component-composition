import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import NoteList from "../src/components/note-list/note-list.js";
import NoteItem from "../src/components/note-item/note-item.js";

Enzyme.configure({adapter:new Adapter()});

describe("NoteList", () => {
  it("should render", done => {
    const onRemove = id => {
      expect(id).toBe("1234");
      done();
    };

    const notes = [];
    notes.push({
      id: "1234",
      title: "foo",
      content: "bar",
      editing: false,
      completed: true
    });
    const wrapper = shallow(<NoteList notes={notes} onRemove={onRemove} />);
    expect(wrapper.find(NoteItem).length).toBe(1);

    const noteItem = wrapper.find(NoteItem).first();

    const noteItemId = noteItem.prop("note").id;
    console.log('ID', noteItemId)

    const removeNote = noteItem.prop("onRemove");

    removeNote(noteItemId);
  });
});