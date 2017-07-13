//Map over all matches and create Chat components
import React from 'react';
import ChatWindow from '../Components/ChatWindow.js';


//Stateless React Component
//NOT Redux container (doesn't need to know app-level state)

const ChatContainer = (props) => {

  return (
    <div>
      {props.matchedUsers.map(user => {
        return <ChatWindow key={user.name} user={user} />
      })}
    </div>
  )
}

export default ChatContainer;

