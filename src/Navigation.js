import React from "react";
 import "./Navigation.css";


function Navigation(props) {
    const sections = ['Home','About','Services','Portfolio','Contact'];
    const navLinks = sections.map( section => {
        return (
            <li><a href={'#'+ section}>{section}</a></li>
        )
    });
  return (
      <nav>
          <h2 className="logo">
              {props.logoTitle}
          </h2>
          <ul>
                {navLinks}
          </ul>
      </nav>
  );
}

export default Navigation;
