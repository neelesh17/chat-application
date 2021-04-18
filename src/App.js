import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/chatfeed'
import LoginModal from './components/loginForm';

const  App = () =>  {
  if(!localStorage.getItem("username")) return <LoginModal />
  return (
    <ChatEngine 
      height="100vh"
      projectID="9867d452-2cb9-4d8b-b3cf-b073ce12bcea"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
