import { SendOutlined } from "@ant-design/icons";
import './chatText.css'
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MESSAGE } from "../../graphql/mutations";
import { CHATS_OF_USER, USER_CHATS } from "../../graphql/queries";
const ChatText = ({sender,receiver}) => {
    const [chat,setChat] = useState("")
    const [createMessage, {  loading, error }] = useMutation(ADD_MESSAGE,{
        refetchQueries: [USER_CHATS,CHATS_OF_USER]});
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    const handleMsg = (e) =>{
        e.preventDefault();
        createMessage({ variables: { sender: sender, receiver:receiver ,content:chat } });
        setChat("")
    }
    // const handleKeyPress = (e) => {
    //   if (e.key === 'Enter' && !e.shiftKey) {
    //     e.preventDefault(); 
    //     handleMsg();
    //   }
    // };
    // onKeyDown={handleKeyPress}
  return (
    <div className="chat-textarea-container">
      <textarea className="chat-textarea" value={chat} placeholder="Type your message..."  onChange={(e)=>{setChat(e?.target?.value)}} />
      <button className="submit-button" onClick={(e)=> {handleMsg(e)}}>
        <SendOutlined />
      </button>
    </div>
  );
};

export default ChatText;
