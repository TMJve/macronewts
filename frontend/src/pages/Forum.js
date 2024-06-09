// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import FriendRecs from "../components/FriendRecs";
import Modal from "../components/Modal";
import { useState } from "react";

function Forum() {

    const [showModal, setShowModal] = useState('false');
    const handleOpenModal = () => {
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleSubmitPost = (e) => {
        const title = e.target.title.value;
        const content = e.target.content.value;
        console.log(title, content);
        setShowModal(false);
    }

    return (
        <>
            <nav>
                <PageNav onAddPost={handleOpenModal} />
            </nav>
            <div className="centered-content">
                <div className="featured-recipes">
                    <div className="featured-text">
                        <h2>Featured Recipes</h2>
                        <hr />
                    </div>
                    <Carousel  />
                    
                    <div className="button-container">
                        <Button>See Recipes</Button>
                    </div>
                   <div className="feed-text">
                        <hr />
                        <h1>Feed</h1>
                        <hr />
                   </div>
                   <div className="main-forum-container">
                        <div className="friend-panel">
                            <FriendRecs />
                        </div>
                        <hr/>
                        <div className="forum-panel">

                        </div>
                        <hr/>
                        <div className="news-panel">
                     
                        </div>
                        {/* Friend Reccomendations */}
                        {/* Forum */}
                        {/* news panel */}
                   </div>
                </div>                
            </div>
            <Modal show={showModal} onClose={handleCloseModal} onSubmit={handleSubmitPost} />
        </>
 
    )
}

export default Forum;