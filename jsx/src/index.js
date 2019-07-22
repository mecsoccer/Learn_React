// import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// create a react Component
const App = () => {
  const time = `Today at ${new Date()}PM`;
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Onyenze" timeAgo="Today at 6:00PM" comment="Nice!"/>
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Approval Card</h4>
          Are you sure:
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Oguguo" timeAgo="Today at 8:00PM"  comment="Cool!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Chioma" timeAgo="Today at 9:00PM"  comment="Hot!"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Chimatara" timeAgo={time}  comment="Oops!"/>
      </ApprovalCard>
    </div>
  );
};

// take the react component and show it on the browser
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
