import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from "enzyme";
import NoteCreateForm from "../src/components/note-create-form/note-create-form.js";

Enzyme.configure({adapter:new Adapter()});

describe("NoteCreateForm", () => {
  it("should render", () => {
    shallow(<NoteCreateForm />);
  });

  it("should have initial state", () => {
    const wrapper = shallow(<NoteCreateForm />);
    expect(wrapper.state("title")).toBe("");
  });

  it("should handle form changes", () => {
    const wrapper = shallow(<NoteCreateForm />);
    const instance = wrapper.instance();
    const event = {
      target: {
        name: "title",
        value: "hi",
        type: "text"
      }
    };
    instance.onChange(event);

    expect(wrapper.state("title")).toBe("hi");
  });

  it("should submit a new note", done => {
    const onSubmit = note => {
      expect(note.id).not.toBe("");
      done();
    };
    const wrapper = shallow(<NoteCreateForm onSubmit={onSubmit} />);

    // notice that we pass in stub function for preventDefault
    const event = {
      preventDefault: () => {}
    };

    wrapper.instance().onSubmit(event);
  });
});
