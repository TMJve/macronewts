// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import FriendRecs from "../components/FriendRecs";
function Forum() {
    return (
        <>
            <nav>
                <PageNav />
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

        </>
 
    )
}

export default Forum;