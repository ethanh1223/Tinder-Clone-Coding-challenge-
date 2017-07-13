//Map over all matches and create Chat components
import React from 'react';
import ChatWindow from '../Components/ChatWindow.js';

export default class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {this.props.matchedUsers.map(user => {
        return <ChatWindow key={user.name} user={user} />
      })}
      </div>
    )
  }
}