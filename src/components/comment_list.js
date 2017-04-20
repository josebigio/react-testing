import React from 'react';
import { connect } from 'react-redux';

const CommentList =  ({comments}) => {

    return(
        <ul className="comment-list">
            {comments.map((comment, i)=>{
                return <li key = {i}>{comment}</li>
            })}
        </ul>
    );
};

const mapStateToProps = ({comments}) => {
    return {
        comments
    }
}

export default connect(mapStateToProps)(CommentList);
