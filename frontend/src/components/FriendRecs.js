import React from "react";
import FriendCard from "./FriendCard";


const friendList = [
    {
      name: "Alice Johnson",
      picture: "https://example.com/pictures/alice.jpg"
    },
    {
      name: "Bob Smith",
      picture: "https://example.com/pictures/bob.jpg"
    },
    {
      name: "Charlie Brown",
      picture: "https://example.com/pictures/charlie.jpg"
    },
    {
      name: "Diana Wilson",
      picture: "https://example.com/pictures/diana.jpg"
    },
    {
        name: "Charlie Brown",
        picture: "https://example.com/pictures/charlie.jpg"
    },
    {
        name: "Diana Wilson",
        picture: "https://example.com/pictures/diana.jpg"
    }
  ];
  

export default function FriendRecs() {
    const friends = friendList;
    return (
        <div className="friend-rec-container">
                <p className="friends-rec-text">Make Friends!</p>
                {friends.map((friend) => (
                    <FriendCard 
                        name={friend.name}
                    />
                ))}
        </div>
    )
}