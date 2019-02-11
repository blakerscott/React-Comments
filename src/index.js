import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sara" 
        timestamp="3:30 PM" 
        content="Hi!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Alex" 
        timestamp="4:27 PM" 
        content="How are you!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Tipper" 
        timestamp="7:14 PM" 
        content="Rooo ro rooo!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Blake" 
        timestamp="8:21 PM" 
        content="Good dog."
        avatar={faker.image.avatar()}
      />
      <CommentDetail 
        author="Philip" 
        timestamp="11:30 PM" 
        content="Why thank you."
        avatar={faker.image.avatar()}
      />
    </div>    
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))