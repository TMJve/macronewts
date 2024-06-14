import PageNav from "../components/PageNav";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


function Profile() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    console.log(user)
    const handleClick = () => {
        logout()
    }

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
                                {/* <profilePicture
                                    picture={profilePicture}
                                /> */}
                            </li>
                            <li className="profile-txt">
                                <div className="profile-name">
                                    {user && (
                                        <h2>{user.email}</h2>
                                    )}
                                    {!user && (
                                        <h1></h1>
                                    )}
                                </div>
                                <hr />
                                <div className="profile-desc">
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
                        <button className='nav-link logoutButton' onClick={handleClick}>Log out</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;