import React, {Component} from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Contains a form', () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find('form').length).toEqual(1);
  });

  it('Should execute callback on form submit', () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onGuess={callback}/>);
    wrapper.find('form').simulate('submit');
    expect(callback).toHaveBeenCalled();
  });
});