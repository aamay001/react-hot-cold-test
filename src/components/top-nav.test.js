import React, {Component} from 'react';
import {shallow, mount} from 'enzyme';

import TopNav from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Contains a nav element with 1 child', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find('nav').children().length).toEqual(1);
  });

  it('Contains two navigation links', () => {
    const wrapper = shallow(<TopNav />);
    expect(wrapper.find('a').length).toEqual(2);
  });

  it('Should call the onNewGame callback when the New Game link is clicked', () =>{
    const callback = jest.fn();
    const wrapper = mount(<TopNav onNewGame={callback} />);
    const newGameLink = wrapper.find('.new');
    newGameLink.simulate('click');
    expect(callback).toHaveBeenCalled();
  });

  it('Should call the onInfo callback when the What? link is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<TopNav onInfo={callback} />);
    const onInfoLink = wrapper.find('.what');
    onInfoLink.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});