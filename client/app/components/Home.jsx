import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



import Logout from './Logout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            signedIn: false
        };
    }
    componentDidMount() {
        $(document).ready(function(){
          $('.slider').slider();
          $('.slides').css('height', '650px');
          $('.slider').css('height', '690px')
        });
    }

	componentWillMount(){
        fetch('/api/signed-in', {
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => response.json())
        .then((results) => {
            if(results.message){
                if(results.message === "signed-in"){
                    this.setState({
                    	signedIn: true
                    })
                }
            }
        });
	}
  	render() {
  		const renderLinks = () => {
  			if(this.state.signedIn){
  				return (
  		      <nav className="navbar navbar-light bg-faded">
                    <div className="nav-wrapper">
                        <a className="brand-logo"><i className="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
                        <ul className="right hide-on-med-and-down">
                            <li><h4 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h4></li>
                            <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/donateform">Profile</Link></li>
                            <li><Logout /></li>
                        </ul>
                    </div>
  			  </nav>
  				)
  			} else {
  				return (
  		      <nav className="navbar navbar-light bg-faded">
                    <div className="nav-wrapper">
                        <a className="brand-logo"><i className="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
                        <ul className="right hide-on-med-and-down">
                                        <li><Link className="nav-links" to="/sign-up">Sign Up</Link></li>
                                        <li><Link className="nav-links" to="/login">Login</Link></li>
                        </ul>
                    </div>
  			  </nav>
  				)
  			}
  		}
	    return (
	        <div>
                {renderLinks()}
                           
                           
				    
                <div className="slider" style={{height: "840px", touchAction: "pan-y", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)"}}>
                        
                        <ul className="slides" style={{height: "800px", touchAction: "pan-y", WebkitUserDrag: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0.1)"}}>
                           
                            <li>
                            <img src="/images/aimodo.jpg"/>
                            <div className="caption center-align">
                                <h3 className="main-tag-h3-slideOne">Welcome to blood donation</h3>
                                
                            </div>
                            </li>
                            <li>
                            <img src="/images/blood-image.jpg"/>
                            <div className="caption center-align">
                                <h5 className="main-tag-h5-slideTwo">Sign Up Today!</h5>
                                
                            </div>
                            </li>
                        </ul>
                </div>
	      
                    
	        </div>
	    );
  	}
};

export default withRouter(Home)
