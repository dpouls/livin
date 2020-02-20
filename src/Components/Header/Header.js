import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-title'>LIVIN</div>
            <div className='header-links-container'>
            <Link className='header-links' to='/'>HOME</Link>
            <Link className='header-links' to='/blog'>BLOG</Link>
            <Link className='header-links' to='/gear'>GEAR</Link>
            <Link className='header-links' to='/video'>VIDEO</Link>
            <Link className='header-links' to='/socialmedia'>SOCIAL MEDIA</Link>
        
            </div>
        </div>
    )
}

export default Header