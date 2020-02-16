import React from 'react';

import './SideDrawer.css';
import {Link} from 'react-scroll'

function sideDrawer(props){
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer open'];
    }

    return(
    <nav className = {drawerClasses}>
        <ion-icon name="close-outline"　class="ion3" onClick={props.click}></ion-icon>
        <ul>
            <li><Link to='about' smooth={true} duration={1000} onClick={props.click}>About</Link></li>
            <li><Link to='services' smooth={true} duration={1000} onClick={props.click}>Works</Link></li>
            <li><Link to='skills' smooth={true} duration={1000} onClick={props.click}>Skills</Link></li>
            <li><Link to='portfolio' smooth={true} duration={1000} onClick={props.click}>Portfolio</Link></li>
            <li><Link to='contact' smooth={true} duration={1000} onClick={props.click}>Contact</Link></li>
        </ul>
    </nav>
    )
}

export default sideDrawer;