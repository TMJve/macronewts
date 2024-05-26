import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function PageNav() {
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
          <button className='nav-link addButton'><a href='#'>+</a></button>
          <image></image>
        </li>
      </ul>
    </nav>
  )
}
