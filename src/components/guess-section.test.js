import React, {Component} from 'react';
import {mount, shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('Renders without crash', () => {
    shallow(<GuessSection />);
  });

  it('Contains an h2 and a guess form', () => {
    const wrapper = mount(<GuessSection />);
    expect(wrapper.find('h2').length).toEqual(1);
    expect(wrapper.find('GuessForm').length).toEqual(1);
  });
});