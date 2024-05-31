import React from "react";
import defaultProfile from "../photos/default-profile.jpg";

const ProfilePicture = ({picture}) =>{
    return(
        <div className="profile-img">
            <img 
                src={defaultProfile}
                alt={defaultProfile}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default ProfilePicture;