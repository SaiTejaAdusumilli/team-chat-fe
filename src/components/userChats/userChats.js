import { USER_CHATS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import "./userChats.css";
import ChatText from "../chatText/chatText";
import { useEffect,useRef } from "react";


const UserChats = ({sender,receiver,receiverName}) => {

  const messagesEndRef = useRef(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  };
  const { loading, error, data } = useQuery(USER_CHATS, {
    variables: { sender: sender,receiver:receiver }});
    useEffect(() => {
      scrollToBottom();
    }, [data]);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  function convertdate(timestamp) {
    const date = new Date(timestamp);
    return date?.getHours() + ":" + String(date?.getMinutes()).padStart(2, "0");
  }
  
  return (
    <div className="chat-layout">
      <h2 className="chat-title">{receiverName}</h2>
      <div className="chat-layout-overflow">
        {data?.getUserChats?.map((chat) => {
          return chat?.sender?.unqname !== sender ? (
            <div className="message left-message" key={chat?.timestamp}>
              {/* <div>{chat?.sender?.firstName}</div> */}
              <div>{chat?.content}</div>
              <div className= "below-content">{convertdate(chat?.timestamp)}</div>
            </div>
          ) : (
            <div className="message right-message" key={chat?.timestamp}>
              {/* <div>{chat?.sender?.firstName}</div> */}
              <div>{chat?.content}</div>
              <div className="below-content">
                <div>{convertdate(chat?.timestamp)}</div>
                <span className="tick">
                    <span></span>
                    </span>
                </div>
               
            </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <ChatText sender={sender} receiver={receiver}/>
    </div>
  );
};

export default UserChats;
