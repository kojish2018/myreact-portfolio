import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './Navigation'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import Header from './Header'
import About from './About'
import Services from './Services'
import Skills from './Skills'
import Portfolio from './Portfolio'
import Contact from './Contact'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router} from "react-router-dom";
// import Route from "react-router-dom/Route";
import Route from "react-router-dom/Route";


//class Componentに書き換える

class App extends React.Component{

    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        })
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
    };
    

    render(){

        let backdrop;
        if(this.state.sideDrawerOpen){
        backdrop = <Backdrop click={this.backdropClickHandler}/>;

    };
        return (
            <Router>
            <div style={{height:'100%'}}>
                <Route path="/" exact render={
                    () => {
                        return ( 
                            <div>
                            <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                {backdrop}
                <Header title="Koji's Portfolio" button='Find Out More'/>
                <About />
                <Services />
                <Skills />
                <Portfolio />
                <Contact />

                </div>
                        );
                    }}/>

                <Route path="/test" exact render={
                    ()=>{
                        return (<div>
                        <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
                        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
                        {backdrop}
                        <h1>Test</h1>
                        </div>)
                    }
                }/>

                
            </div>
            </Router>
        )

    };
}
// function App(){
//     let state = {
//         sideDrawerOpen: true
//     };

//     function drawerToggleClickHandler(){
//         return state.sideDrawerOpen = !state.sideDrawerOpen
//     };
//     drawerToggleClickHandler();


//     let sideDrawer;
//     let backdrop;
//     if(state.sideDrawerOpen){
//         sideDrawer = <SideDrawer />;
//         backdrop = <Backdrop />;

//     }

//     return (
//         <div style={{height:'100%'}}>
//             <Navigation drawerClickHandler=''/>
//             {sideDrawer}
//             {backdrop}
//             <Header title="Stylish Portfolio" button='Find Out More'/>
//             <Services />
//         </div>
//     )
// }

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
