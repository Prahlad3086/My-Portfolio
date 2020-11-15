import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/components/_navbar.css';
import { IconContext } from 'react-icons';
import profileImage from '../images/profile-pic.jpg';

const Navbar = ()=> {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div  className="sidebar-container">
            <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    {sidebar ? <AiIcons.AiOutlineClose onClick={showSidebar}/> : <FaIcons.FaBars onClick={showSidebar} />}
                </Link>
            </div>
            <div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <div className="profile-pic">
                    <img className="pic" src={profileImage} alt={profileImage}/>
                    <hr className="horizontal-lines"/>
                </div>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <strong>{item.title}</strong>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="copyright">
                    <hr className="horizontal-lines"/>
                    <p>© 2020 Prahlad_3086</p>
                </div>
            </nav>
            </div>
            </IconContext.Provider>
        </div>
    );
}

export default Navbar;