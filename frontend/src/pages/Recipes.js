import React from 'react';
import PageNav from '../components/PageNav';
import MenuList from '../components/MenuList';
import AddMenuButton from '../components/AddMenuButton';
import { Link } from 'react-router-dom';


function Recipes() {
  return (
    <>
      <PageNav />
      <div className="centered-content">
        <div className="featured-recipes">
          <header className="headerrecipe">
            <h1 className="food-menu">Food Menu</h1>
            <div className="addRecipee">
            <Link className="add-menu-btn" to='/AddRecipe'>Add a Recipe +</Link>
            </div>
          </header>
        </div>
      </div>
      <div className="content-recipe">
        <MenuList />
      </div>
    </>
  );
}

export default Recipes;
