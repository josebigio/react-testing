import CommentList from '../../src/components/comment_list';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import React from 'react';


describe('CommentList', ()=>{
    let CommentListWrapper;
    const comments = ['new comment','other comment','final comment'];
    beforeEach(()=>{
       
        CommentListWrapper = shallow(<CommentList comments={comments}/>);
    });

    it('Shows an LI for each component', ()=>{
        expect(CommentListWrapper.find('li')).to.have.length(3);
    });

     it('Shows each comment that is provided', ()=>{
         comments.forEach((comment, i)=>{
             expect(CommentListWrapper.find('li').at(i).text()).to.equal(comment);
         });
       
    });


});