import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';

import App from '../../src/components/app';
import CommentBox from '../../src/components/comment_box';
import CommentList from '../../src/components/comment_list';

let appWrapper;

describe('Testing the App component', () => {
  beforeEach(() => {
    appWrapper = shallow(<App />)
  });

  it('shows a comment box', () => {
    expect(appWrapper.find(CommentBox)).to.exist;
    expect(appWrapper.find(CommentList)).to.exist;
  });

});

