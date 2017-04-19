// import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = mount(<CommentBox />);
    });

    it('has the correct class', () => {
        expect(component.hasClass('comment-box')) .to.equal(true);
    });

    it('has a text area', () => {
        expect(component.find('textarea').exists()).to.equal(true);
    });

    it('has a button', () => {
        expect(component.find('button').exists()).to.equal(true);
    });
 
    describe('entering some text', () => {
       

        it('shows text that is entered', () => {
            const textArea = component.find('textarea');
            textArea.simulate('change', {target: {value: 'comment'}});
            expect(textArea).to.have.value('comment');
        });

        it('when submitted, clears the input', () => {
            const textArea = component.find('textarea');
            textArea.simulate('change', {target: {value: 'comment'}});
            component.simulate('submit');
            expect(textArea).to.have.value('');
        });
    })
});

