import PageNav from "../components/PageNav";
import defaultProfile from "../photos/default-profile.jpg";
import ProfilePicture from "../components/profilePicture";
import { useState } from "react";

function EditProfile(){
    const [profilePicture, setProfilePicture] = useState(defaultProfile);
    const [name, setName] = useState('name');
    const [description, setDescription] = useState('Description');

    const handleProfilePicChange = (event) =>{
        const file = event.target.files[0];
        setProfilePicture(file);
    };

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleDescriptionChange = (event) =>{
        setDescription(event.target.value);
    }

    const handleSubmit = (event) =>{
        formData.append('profilePicture', profilePicture);
        formData.append('name', name);
        formData.append('description', description);
    }

    return(
        <>
            <nav>
                <PageNav />
            </nav>
            <div className="profile-window">
                <div className="profile-content-box">
                    <form onSubmit={handleSubmit}>
                        <ul className="edit-profile-content">
                            <li>
                                {/* Profile Picture */}
                                <ul className="edit-pic-column">
                                    <li>
                                        <ProfilePicture picture={profilePicture}/>    
                                    </li>
                                    <li className="edit-profile-pic">
                                        <input type="file" onChange={handleProfilePicChange} />
                                    </li>
                                </ul>
                            </li>
                            <li className="edit-string-form">
                                {/* Name */}
                                <h1>Insert Name</h1>
                                <input type="text" value={name} onChange={handleNameChange} />
                                <br /><hr />
                                <h1>Insert Description</h1>
                                <textarea value={description} onChange={handleDescriptionChange} />
                                {/* <button onClick={}>Save Changes</button> */}
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

        </>
        
        
    )
}

export default EditProfile;