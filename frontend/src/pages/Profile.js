import PageNav from "../components/PageNav";
import React, { useState } from 'react';
import defaultProfile from "../photos/default-profile.jpg";
import { Link } from "react-router-dom";

function Profile() {
    const [profilePicture, setProfilePicture] = useState(defaultProfile);

    const handleProfilePicChange = (event) =>{
        setProfilePicture(event.target.files[0]);
    };

    return(
        <>
            <nav>
                <PageNav />
            </nav>
            <div className="profile-window">
                <div className="profile-content-box">
                    {/* Top part of profile (with pink background) */}
                    <div className="profile-box">
                        <ul className="profile">
                            <li>
                                <profilePicture
                                    picture={profilePicture}
                                />
                            </li>
                            <li className="profile-txt">
                                <div className="profile-name">
                                    <h1>John Doe</h1>
                                    
                                </div>
                                <hr />
                                <div className="profile-desc">
                                    <h3>
                                        lorem ipsum
                                    </h3>
                                </div>  
                            </li>
                            <li className="profile-edit">
                                <Link className='nav-link' to='/editProfile'>+</Link>
                            </li>
                        </ul>
                        
                    </div>
                    {/* bottom part of profile (with white background) */}
                    <div className="profile-bottom">
                        
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;