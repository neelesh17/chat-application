import React from 'react'; 
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatfeed'
import LoginModal from './components/loginForm';
import './App.css';

const projectID = '9867d452-2cb9-4d8b-b3cf-b073ce12bcea';

const  App = () =>  {
  if(!localStorage.getItem("username")) return <LoginModal />
  return (
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
