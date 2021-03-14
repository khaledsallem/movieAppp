import React, { Component } from 'react'

import { Link, NavLink } from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-between', margin: '10px' }}>

                <NavLink exact to='/'>
                    <li>Accueil</li>

                </NavLink>

                <NavLink to='/Movies'>
                    <li>Movies</li>
                </NavLink>

                <NavLink to='/Contact'>
                    <li>Contact</li>
                </NavLink>

                <NavLink to='/Blog'>
                    <li>Blog</li>
                </NavLink>

                <li>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Movie" aria-label="Search"></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
            </ul>

        </div>
    )
}








export default Header;



