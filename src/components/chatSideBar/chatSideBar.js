import { CHATS_OF_USER } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import "../userChats/userChats.css";
import { Button } from "antd";
const ChatSideBar = ({handleChatClick, userEmail}) => {
  const { loading, error, data } = useQuery(CHATS_OF_USER, {
    variables: { userEmail: userEmail}});
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
 
  return (
    <div >
      {data?.chatsOfUser?.map((chat) => {
        return (
          <div className="chat-title" key={chat?.session?.id}>
            <Button  onClick={()=>handleChatClick(chat?.session)}>
              {chat?.session?.otherUser?.firstName}
            </Button>
            <div style={{fontSize:"14px"}}>{ (chat?.message.length <20) ? chat?.message : chat?.message.substring(0, 20)+"..."}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatSideBar;
