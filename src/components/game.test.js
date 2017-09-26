import React, {Component} from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crash', () => {
    shallow(<Game />);
  });

  it('Should contains all other componenets', () => {
    const wrapper = mount(<Game /> );
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('GuessSection').length).toEqual(1);
    expect(wrapper.find('GuessCount').length).toEqual(1);
    expect(wrapper.find('GuessList').length).toEqual(1);
  });

  it('Should reset game on newGame', () => {
    const wrapper = mount(<Game />);
    wrapper.instance().guess(10);
    wrapper.instance().guess(20);
    wrapper.instance().guess(52);
    expect(wrapper.state().guesses.length).toEqual(3);
    wrapper.instance().newGame();
    expect(wrapper.state().guesses.length).toEqual(0);
  });

  it('Feedback should be You\'re Ice Cold...', () => {
    const wrapper = mount(<Game />);
    const answer = wrapper.state().correctAnswer;
    wrapper.instance().guess(answer + 50);
    expect(wrapper.state().feedback).toEqual('You\'re Ice Cold...');
  });

  it('Feedback should be You\'re Cold...', () => {
    const wrapper = mount(<Game />);
    const answer = wrapper.state().correctAnswer;
    wrapper.instance().guess(answer + 30);
    expect(wrapper.state().feedback).toEqual('You\'re Cold...');
  });

  it('Feedback should be You\'re Warm', () => {
    const wrapper = mount(<Game />);
    const answer = wrapper.state().correctAnswer;
    wrapper.instance().guess(answer + 10);
    expect(wrapper.state().feedback).toEqual('You\'re Warm');
  });

  it('Feedback should be You\'re Hot!', () => {
    const wrapper = mount(<Game />);
    const answer = wrapper.state().correctAnswer;
    wrapper.instance().guess(answer + 1);
    expect(wrapper.state().feedback).toEqual('You\'re Hot!');
  });

  it('Feedback should be You got it!', () => {
    const wrapper = mount(<Game />);
    const answer = wrapper.state().correctAnswer;
    wrapper.instance().guess(answer);
    expect(wrapper.state().feedback).toEqual('You got it!');
  });

});