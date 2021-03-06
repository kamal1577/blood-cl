import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
// for images
    componentDidMount() {
        $(document).ready(function(){
            $('.slider').slider();
            $('.slides').css('height', '650px');
            $('.slider').css('height', '690px')
          });
      }


    signInForm(e){
        e.preventDefault()
    	var signInUser = {
    		username: this.refs.username.value,
    		password: this.refs.password.value
    	}
        fetch('/api/sign-in', {
            method: 'post',
            body: JSON.stringify(signInUser),
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            credentials: 'same-origin'
        }).then((response) => {
            if(response.status == 401){
                alert("Login Failed for Username and/or Password")
            } else {
                this.props.history.push("/home")
            }
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
            if(results.message === "signed-in"){
                this.props.history.push("/home") 
            }
        });
	}
  	render() {
	    return (
	        <div>
	       		<nav className="navbar navbar-light bg-faded">
                <div className="nav-wrapper">
                    <a className="brand-logo"><i className="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
                    <ul className="right hide-on-med-and-down">
                            <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/">Home</Link></li>
                                <li><Link style={{textDecoration: 'none'}} className="nav-links" to="/sign-up">Sign Up</Link></li>
                    </ul>
                </div>
                 </nav>
                 {/* <div className="slider">
                                <ul className="slides">
                                    <li>
                                    <img src="/images/save-life.jpg" />
                                    </li>
                             </ul>
                 </div> */}
                 
                
                <div className="text-center">
                        
                        <div className="well center-block" id="sign-in-div">
                            <form id="sign-in-form" onSubmit={this.signInForm.bind(this)}>
                            
                             <h2 className="signIn-tag">Please Sign in !</h2>
    
                                <input  type="text" ref="username" placeholder="Username" /><br></br>
                        
                                <input type="password" ref="password" style={{ fontSize: "20px"}} placeholder="Password"/><br></br>
                                <input className="btn btn-danger" type="submit" />
                            </form>
                        </div>
                </div>
	        </div>
	    );
  	}
};
export default withRouter(SignIn)
