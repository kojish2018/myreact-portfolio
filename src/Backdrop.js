import React from 'react';

import './Backdrop.css'

function backdrop(props){
    return(
        <div className='backdrop' onClick={props.click}/>
    )
}

export default backdrop;