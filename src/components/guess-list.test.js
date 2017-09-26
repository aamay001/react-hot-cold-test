import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });

  it('Should contain 3 list items', () => {
    const list = [1,2,3];
    const wrapper = shallow(<GuessList guesses={list}/>);
    expect(wrapper.find('li').length).toEqual(3);
  });
});