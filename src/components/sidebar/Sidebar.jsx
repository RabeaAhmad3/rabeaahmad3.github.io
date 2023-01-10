import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {sideBarMenu, socialIcons} from "../../data/data";
import './sidebar.scss';
import logo from './logo.jpg';
const Sidebar = () => {
    return(
        <aside className = 'aside'>
        <div className= "aside-wrapper">
            <Link to={"/"} className = "logo-section">
               <img src={logo} alt="art"/>
            </Link>
            <ul className="side-link">{sideBarMenu.map((link, index) =>{
                const {text, url, icon} = link;
                return(
                    <li key ={index}>
                        <NavLink to={url} className ={({isActive})  => {
                            return isActive ? "nav__links active-links" : "nav__links"
                        }}>
                            {icon}
                            {text}
                        </NavLink>
                    </li>
                )
            })}
                {}
            </ul>
            <div className="social-icon">
                {socialIcons.map((icons, index) =>{
                    const {icon, url} = icons;
                    return(
                       <a href={url} target="_blank" rel="noopener noreferrer" key={index} >
                        {icon}
                       </a>
                    )
                }
            )}
            </div>
        </div>
        </aside>
    )
}
export default Sidebar;