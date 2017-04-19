import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';

import App from '../../src/components/app';
import CommentBox from '../../src/components/comment_box';

let component;



describe('Testing the App component', () => {
  beforeEach(() => {
    component = shallow(<App />)
  });

  it('shows a comment box', () => {
    expect(component.find(<CommentBox />)).to.exist;
  });

});

