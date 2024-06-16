// import React from 'react';

import { Link } from "react-router-dom";

function AddRecipe(){
    return (
        <div className="modal-overlay">
        <div className="modal-content-recipe">
          <Link className="close-button" to ='/Recipes'>X</Link>
          <h2>Create a Recipe</h2>
          <form >
            <div className="form-input-container">
              <label>Recipe Name</label>
              <input 
                className="post-input-recipe" 
                type="text" 
                name="title" 
                required 
                placeholder=". . ." 
              />
            </div>
            <div className="form-input-container">
              <label>Preparation Time</label>
              <input 
                className="post-input-recipe" 
                type="text" 
                name="title" 
                required 
                placeholder=". . . Mins" 
              />
            </div>
            <div className="form-input-container">
              <label>Calories</label>
              <input 
                className="post-input-recipe" 
                type="text" 
                name="title" 
                required 
                placeholder=". . . Kcal" 
              />
            </div>
            <div className="form-input-container">
              <label>Description</label>
              <input 
                className="post-input-recipe" 
                type="text" 
                name="title" 
                required 
                placeholder=". . . " 
              />
            </div>
            <div className="form-input-container">
              <label>Step</label>
              <textarea 
                className="post-input-recipe" 
                name="content" 
                required 
                placeholder="Share your recipe..." 
              ></textarea>
            </div>
            <button className="post-button" type="submit">Post</button>
          </form>
        </div>
      </div>
    );
}

export default AddRecipe