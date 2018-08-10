import React from "react";
import renderer from "react-test-renderer";
import 'jest-enzyme';
import {Enzyme} from 'enzyme';
import { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import App from '../src/components/app/app.js';
import NoteCreateForm from '../src/components/note-create-form/note-create-form.js';


describe('<App/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = shallow(<App/>);
    expect(app.find('h2').exists()).toBeTruthy();
  });
});

describe('<App/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <App />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

  });

});

  describe('<NoteCreateForm/> (Enzyme Test)', () => {
    it('is alive at application start', () => {
      let app = shallow(<NoteCreateForm/>);
      expect(app.find('form').exists()).toBeTruthy();
    });
  });
  
  describe('<NoteCreateForm/> (Snapshot Test)', () => {
    it('renders right', () => {
      const component = renderer.create(
        <NoteCreateForm />
      );
  
      let tree = component.toJSON();
  
      expect(tree).toMatchSnapshot();
  
    });
});