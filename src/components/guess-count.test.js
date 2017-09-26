import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Displays guess count value', () => {
    const guessCount = 25;
    const wrapper = mount(<GuessCount count={guessCount}/>);
    expect(wrapper.instance().props.count).toEqual(25);
    expect(wrapper.find('#count').text()).toEqual('25');
  });
});