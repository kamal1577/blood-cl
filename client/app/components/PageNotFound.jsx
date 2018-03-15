import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export default class PageNotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
	componentWillMount(){
	}
  	render() {
	    return (
		 <div>
					<nav className="navbar navbar-light bg-faded">
							<div className="nav-wrapper">
							<a className="brand-logo"><i className="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
							<ul className="right hide-on-med-and-down">
								<li><Link style={{textDecoration: 'none'}} className="nav-links" to="/">Home</Link></li>
										
							</ul>
							</div>
					</nav>	
					<div>
							<h1>Page Not found, please go back <Link style={{textDecoration: 'none'}} className="nav-links" to="/">Home</Link></h1>
					</div>
		</div>			
	    );
  	}
};
