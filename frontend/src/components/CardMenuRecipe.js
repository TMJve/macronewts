import React from 'react';

export default function CardMenuRecipe ({ name,image,time,calories,rate,description,recipe}) {
    return (
        <div className="MenuRecipe-Box">    
            <h1 className='menuName'>{name}</h1>
            <hr className='horizontal'></hr>
            <div className='wrapper'>
                <div className='left-box'>
                    <div className="image-wrapper">
                        <img src = {image} className = "menu-image" alt = "menu-image"></img>
                    </div>
                </div>
                <div className = "right-box">
                    <div className='right-upper'>
                        <img src="https://static-00.iconduck.com/assets.00/clock-icon-1024x1024-rinbiqa9.png"
                        alt="time-rate" className='time-rate'/>
                        <h2>{time}</h2>
                        <hr className='vertical'></hr>
                        <h2>{calories}</h2>
                        <hr className='vertical'></hr>
                        <img src="https://www.freeiconspng.com/thumbs/love-icon/love-icon-15.png"
                        alt="love-rate"className='love-rate'/>
                        <h2>{rate}</h2>
                    </div>
                    <div className = 'right-lower'>
                        <hr className='horizontal'></hr>
                        <h2>{description}</h2>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='recipe'>{recipe}</h1>
            </div>
        </div>
    )
}