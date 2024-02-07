import {useState } from "react";
import ChatSideBar from '../chatSideBar/chatSideBar';
import UserChats from '../userChats/userChats';
import { useLocation } from 'react-router-dom';
import Profile from '../profile/profile';
import '../userChats/userChats.css'
const HomePage = () => {
  const location = useLocation();
  const { userEmail} = location.state || {};
  const [sender, setSender] = useState("")
  const [receiver, setReceiver] = useState("")
  const [receiverName, setReceiverName] = useState("")
  const [profileClickValue, setProfileClickValue] = useState(false);
  function handleChatClick(chat){
    setSender(chat?.user?.unqname)
    setReceiver(chat?.otherUser?.unqname)
    setReceiverName(chat?.otherUser?.firstName)
  }
  function profileClick(profileClickValue){
    setProfileClickValue(profileClickValue)
  }
  

  return (
    <>
      <ChatSideBar handleChatClick={handleChatClick} userEmail={userEmail}/>
      {sender && receiver ? <UserChats sender={sender} receiver={receiver} receiverName={receiverName}/> : <div className="chat-layout">Click on any chats to load....</div>}
      <Profile userEmail={userEmail} profileClickValue={profileClickValue} profileClick={profileClick} />
    </>
  );
}

export default HomePage;
