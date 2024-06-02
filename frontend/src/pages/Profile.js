import PageNav from "../components/PageNav";
import React, { useState } from 'react';
import defaultProfile from "../photos/default-profile.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/user')
            const json = await response.json()

            if (response.ok) {
                setUsers(json)
            }
        }

        fetchWorkouts()
    }, [])

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
                                {users && users.map((user) => (
                                    <h1 key={user._id}>{user.name}</h1>
                                ))}
                                    
                                </div>
                                <hr />
                                <div className="profile-desc">
                                {users && users.map((user) => (
                                    <h3 key={user._id}>{user.description}</h3>
                                ))}
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