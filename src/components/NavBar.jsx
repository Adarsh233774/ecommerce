import React from 'react'
import './NavBar.css'
import logo from './g.ico'
import SearchBar from './SearchBar/SearchBar'
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"

function NavBar() {
  return (
    <div className='Container_navbar'>
        <div className="Burger_logo_navbar">
            <div className='burger'>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div>
                <img className='logo_div_navbar' src={logo}  alt="" />
                <p className='logo_title_navbar' >Cooking World</p>
            </div>
            <div>
                <p className='Home_div_navbar' > Home</p>
            </div>  
            <dir>
                <p className='Courses_title_navbar' >Courses</p>
            </dir>
            <dir>
                <p className='About_title_navbar' >About Us</p>
            </dir>

        </div>

            <SearchBar/>
            <IoMdNotificationsOutline size={22} className="Notification_icon"/>
            <div className="Auth_cont_navbar">
                <p className="Auth_btn">
                    <BiUserCircle size={22}/>
                    <b>Sign In</b>
                </p>
            </div>
    </div>
  )
}

export default NavBar