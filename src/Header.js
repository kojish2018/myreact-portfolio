import React from "react";

import Background from './img/トップ画.jpg'

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
            <p>Bootstrap example portfolio</p>
            <a href='#button'>{props.button}</a>
        </header>
    );

};

export default Header;