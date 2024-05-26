import React from "react"

export default function FriendCard({name}) {
    return(
        <div className="friend-card-container">
            <p className="card-name-tag">
                {name}
            </p>
            <button className="add-friend-button">+</button>
            <image />
        </div>
    )
}