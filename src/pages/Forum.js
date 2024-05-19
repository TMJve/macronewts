// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
function Forum() {
    return (
        <>
            <nav>
                <PageNav />
            </nav>
            <div className="centered-content">
                <body className="featured-recipes">
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
                </body>                
            </div>

        </>
 
    )
}

export default Forum;