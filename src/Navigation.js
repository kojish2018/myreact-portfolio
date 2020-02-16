import React from "react";
import "./Navigation.css";
import DrawerToggleButton from './DrawerToggleButton';


function Navigation(props){
    return (
        <div className='toolbar'>
        <nav className='toolbar_navigation'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolbar_logo'>
            </div>
            {/* <div className='spacer'></div> */}
            <div className='toolbar_navigation-items'>
                <ul>
                    {/* <li><a href='/'>About</a></li> */}
                    {/* <li><a href='/'>Works</a></li>
                    <li><a href='/'>Skills</a></li>
                    <li><a href='/'>Portfolio</a></li>
                    <li><a href='/'>Contact</a></li> */}
                </ul>
            </div>
        </nav>
        </div>
    );
}


// function Navigation(props) {
//     const sections = ['Home','About','Services','Portfolio','Contact'];
//     const navLinks = sections.map( section => {
//         return (
//             <li><a href={'#'+ section}>{section}</a></li>
//         )
//     });
//   return (
//       <nav>
//           <h2 className="logo">
//               {props.logoTitle}
//           </h2>
//           <ul>
//                 {navLinks}
//           </ul>
//       </nav>
//   );
// }

export default Navigation;
