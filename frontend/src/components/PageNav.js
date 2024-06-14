import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function PageNav({onAddPost}) {
  return (
    <nav className='navbar sticky'>
      <div className='nav-logo'>
        <h1>
          MacroNewts
        </h1>
      </div>
      <SearchBar />
      <ul className='nav-items'>
        <li className='nav-item'>
          <Link className='nav-link' to='/Profile'>Profile</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Recipes'>Recipes</Link>
        </li>
        <li className='nav-item'>
          <button className='nav-link addButton' onClick={onAddPost}><a href='#'>+</a></button>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/Profile'>
            <button className='nav-link addButton profilePicture'><a href='#'></a></button> 
          </Link>
        </li>
      </ul>
    </nav>
  );
}
