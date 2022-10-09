import { Reorder, Search, Videocam, YouTube } from '@mui/icons-material'
import React from 'react'
import './Header.css'
const Header = ({ handledata, inputref }) => {
  // const Header = () => {
const message = ()=>{
  alert('Hello world');
}
  return (
    <div className='header-container'>
        <div className='header-box'>
          <YouTube style={{"scale":"1.5"}} Link to="/" />
          <span className='logo'>MyTUBE</span>
        </div>
        <div className='header-box'>
        {/* ref={inputref} */}
          <input type='text' className='search-box' placeholder=' Type Here' ref={inputref} />  
         
          <button className='search-btn' onClick={handledata}>
          <Search />
          </button>
        </div>
        <div className='header-box'>
          <Videocam  onClick={message} style={{"scale":"1.4", "padding-right":"8px"}}/>
          <Reorder onClick={message} style={{"scale":"1.4"}}/>
        </div>
    </div>
  )
}

export default Header