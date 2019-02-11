import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.avatar()} />
      </a>
      <div className="content">
        <a href="/" className="author">
        Sara
        </a>
        <div className="metadata">
          <span className="date">January 28th</span>
        </div>
        <div className="text">How is it going?</div>
      </div>
    </div>
  );
};  

export default CommentDetail;