// import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import FriendRecs from "../components/FriendRecs";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";


const dummyPosts = [
    {
        _id: '1',
        title: 'First Post',
        content: 'This is the content of the first post.',
    },
    {
        _id: '2',
        title: 'Second Post',
        content: 'This is the content of the second post.',
    },
    {
        _id: '3',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '4',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '5',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '6',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '7',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '8',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '9',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '10',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '11',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '12',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },
    {
        _id: '13',
        title: 'Third Post',
        content: 'This is the content of the third post.',
    },

];


function Forum() {

    const [posts, setPosts] = useState(dummyPosts);
    const [showModal, setShowModal] = useState('false');

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        };
        
        fetchPosts();
    }, []);

    const handleOpenModal = () => {
        setShowModal(true);
    }
    
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const handleSubmitPost = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const postData = {
            title: formData.get('title'),
            content: formData.get('content'),
        };

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });

        if(response.ok) {
            const newPost = await response.json();
            setPosts([newPost, ...posts]);
            handleCloseModal();
        } else {
            console.error('Failed to create post');
        }
        // const title = e.target.title.value;
        // const content = e.target.content.value;
        // console.log(title, content);
        // setShowModal(false);
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
                            <div className="posts-container">
                                {posts.map((post) => (
                                    <div key={post._id} className="post">
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                    </div>
                                ))}
                            </div>
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