import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "../../graphql/queries";
import { Avatar, Tooltip } from "antd";
import ProfileModal from "../profileModal/profileModal";

const Profile = ({ userEmail, profileClickValue, profileClick }) => {
  const { loading, error, data } = useQuery(USER_PROFILE, {
    variables: { userEmail: userEmail },
  });
  if (loading) return "Loading...";
  if (error) return `Error User not found!`;
  console.log(data);
  const text = `${data?.userProfile?.firstName} ${data?.userProfile?.lastName}`;
  //    "Last Name":data?.userProfile?.lastName, "User Id":data?.userProfile?.unqname,"Email":data?.userProfile?.email}
  return (
    <div>
      {" "}
      <Tooltip placement="left" title={text} mouseEnterDelay="0.1">
        <Avatar onClick={()=>profileClick(!profileClickValue)} style={{cursor:"pointer"}}>{data?.userProfile?.unqname[0].toUpperCase()}</Avatar>
      </Tooltip>
      {profileClickValue && <ProfileModal data={data} profileClick={profileClick} profileClickValue={profileClickValue}/>}
    </div>
  );
};

export default Profile;
