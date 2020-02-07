import React from 'react';
import './Services.css';

function Services(){
    return(
        <div className='services' >
            <h3>services</h3>
            <h2>What We Offer</h2>
            <div className='row'>
            <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
            <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} />
            <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} />
            <Icons myIcon={iconObj[3].icon} myTitle={iconObj[3].title} myDescription={iconObj[3].description} />

               {/* <div>
                   <span>
                   <ion-icon name="phone-portrait"></ion-icon>
                   </span>
                   <h4>Responsive</h4>
                   <p>Looks great on any screen size!</p>
               </div>
               <div>
               <span>
               <ion-icon name="brush"></ion-icon>
               </span>
               <h4>Redesigned</h4>
                   <p>Freshly redesigned for Bootstrap</p>

               </div>
               <div>
               <span>
               <ion-icon name="thumbs-up"></ion-icon>
               </span>
                    <h4>Favorited</h4>
                   <p>Millions of users <ion-icon name="heart"></ion-icon>Start Bootstrap!</p>

               </div>
               <div>
               <span>
               <ion-icon name="help"></ion-icon>
               </span>
               <h4>Question</h4>
                   <p>I mustache you a question</p>

               </div> */}
            </div>
        </div>
    );
};

const iconObj = [
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title: 'Responsive',
        description: 'Looks great on any screen size!'
    },
    {
        icon: <ion-icon name="brush"></ion-icon>,
        title: 'Redesigned',
        description: 'Freshly redesigned for Bootstrap'
    },
    {
        icon: <ion-icon name="thumbs-up"></ion-icon>,
        title: 'Favorited',
        description: 'Millions of users love Start Bootstrap!'
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title: 'Question',
        description: 'I mustache you a question'
    }
]

function Icons(props){
    return(
        <div>
            <span>
            {props.myIcon}
            </span>
            <h4>{props.myTitle}</h4>
            <p>{props.myDescription}</p>
        </div>
    )
}

export default Services;