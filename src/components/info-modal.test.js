import React, {Component} from 'react';
import {mount, shallow} from 'enzyme';

import InfoModal from './info-modal';

describe('<InfoModal />', () => {
  it("Renders without crashing", () => {
    shallow(<InfoModal />);
  });

  it('Should call the onClose callback when the close link is clicked', () => {
    const callback = jest.fn();
    const wrapper = mount(<InfoModal onClose={callback} />);
    const closeLink = wrapper.find('.close');
    closeLink.simulate('click');
    expect(callback).toHaveBeenCalled();
  });
});