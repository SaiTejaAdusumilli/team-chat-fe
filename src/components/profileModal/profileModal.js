import { CloseCircleOutlined } from "@ant-design/icons";
import "./profileModal.css";
const ProfileModal = ({ data, profileClickValue, profileClick }) => {
  return (
    <div className="profile-modal-overlay" onClick={() => profileClick(!profileClickValue)}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="profile-modal-header">
          <h2>{data?.userProfile?.firstName.toUpperCase()}</h2>
          <CloseCircleOutlined onClick={() => profileClick(!profileClickValue)} style={{fontSize:"1.75rem"}}/>
        </div>
        <div className="profile-modal-content">
          <div className="profile-details">
            <p>
              Name: {data?.userProfile?.firstName.toUpperCase()}{" "}
              {data?.userProfile?.lastName.toUpperCase()}
            </p>
            <p>Email: {data?.userProfile?.email}</p>
            <p>User ID: {data?.userProfile?.unqname.toUpperCase()}</p>
          </div>
        </div>
        {/* <div className="profile-modal-footer">
              <button>Edit Profile</button>
              <button>Account Settings</button>
            </div> */}
      </div>
    </div>
  );
};

export default ProfileModal;
