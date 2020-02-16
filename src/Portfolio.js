import React from 'react';
import './Portfolio.css'
import img from './img/PortfolioCard.png'

function Portfolio(){
    return(
        <div className='portfolio' id="portfolio">
            <h3>制作実績</h3>
            <h2>Portfolio</h2>

            <div className="card-wrapper">
                <div className="card">
                    <img src={img} alt="card background" className="card-img"></img>
                    <h4>Portfolio1</h4>
                    <p className="job-title">Lead Designer</p>
                    <p className="card-about">
                        some descriptions...
                    </p>
                    <a href="#" className="btn">Visit</a>
                </div>
            </div>

            {/* <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Cards />
                    </div>
                </div>
            </div> */}
        </div>

    );
}

// function Cards(){
//     return(
//         <div className="card text-center">
//             <div className="overflow">
//                 <img src={img} alt="Image 1" className="card-img-top"/>
//                 <div className="card-body text-dark">
//                     <h4 className="card-title">Card Title</h4>
//                     <p className="card-text text-secondary">something</p>
//                     <a href="#" className="btn btn-outline-success">go anywhere</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Portfolio;