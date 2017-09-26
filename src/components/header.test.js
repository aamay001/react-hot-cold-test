import React, {Componenet} from 'react';
import {shallow, mount} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Should contain a TopNav element and an h1', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('TopNav').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h2').length).toEqual(0);
  });

  it('Should show and hide info modal', () => {
    const wrapper = mount(<Header />);
    wrapper.instance().toggleInfoModal();
    expect(wrapper.find('InfoModal').length).toEqual(1);
    wrapper.instance().toggleInfoModal();
    expect(wrapper.find('InfoModal').length).toEqual(0);
  });
});