import React from "react";

import Background from './img/トップ画3.jpg'

import './Header.css'

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover'
};

function Header(props){
    
    return(
        <header style={myStyles}>
            <h1>{props.title}</h1>
            <p>Web Engineer</p>
            <a href='#about'>{props.button}</a>
        </header>
    );

};

export default Header;