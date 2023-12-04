import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "../style/Navbar.css";
import {Link} from "react-router-dom"


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type="text" placeholder='search' />
          <SearchIcon/>
        </div>
        <div className='items'>         
           <Link to='/'> <h4>Home<span className='span'>Page</span></h4></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
