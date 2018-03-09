import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

import Logout from './Logout';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {},
        //   selected: undefined,
        //   donors: []
        };
    }

// Dropdown Code
    // onSelectChange(e) {
    //   this.setState({
    //     selected: e.target.value
    //   })
    // }
    // componentDidMount() {
    //   var element = ReactDOM.findDOMNode(this.refs.dropdown)

    //   $(element).ready(function() {
    //     $('select').material_select();
    //     $('span').removeClass('caret')
    //   });
    //   $(ReactDOM.findDOMNode(this.refs.donorselect)).on('change', this.onSelectChange.bind(this));
    // }

// Delete for the logout
    logoutUser(){
        fetch('/api/logout', {
            method: 'DELETE',
            credentials: 'same-origin'
        }).then((response) => {
        	if(response.status == 204){
        		this.props.history.push('/');
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
        if(results.message){
            if(results.message !== "signed-in"){
                this.props.history.push("/login")
            } else {
            	this.setState({
            		user: results.user
            	})
            }
        }
    });
}


    // RegisterDonorForm(e){
    //         	e.preventDefault();
    //         	var newDonor = {
    //                 first_name: this.refs.first_name.value,
    //                 last_name: this.refs.last_name.value,
    //                 email: this.refs.email.value,
    //                 age: this.refs.age.value,
    //                 phone: this.refs.phone.value,
    //                 address: this.refs.address.value,
    //                 blood_group: this.refs.blood_group.value
                   
    //         	}
                // fetch('/api/register-donor', {
                //     method: 'post',
                //     body: JSON.stringify(newDonor),
                //     headers: {
                //         'content-type': 'application/json',
                //         'accept': 'application/json'
                //     },
                //     credentials: 'same-origin'
                // }).then((response) => response.json())
                // .then((results) => {
                //     console.log(results);
                // 	this.props.history.push("/");
                // });
                
            // }

// // Getting my donors data
//     fetch('/donors', {
//       headers: {
//          'content-type': 'application/json',
//          'accept': 'application/json'
//      },
//      credentials: 'same-origin'
//     }).then((response) => response.json())
//     .then((results) => {
//     	this.setState({
//     		donors: results
//     	})
//     });
// 	}
  	render() {
      console.log(this.state) // shows the user logged in and donors: results

	    return (
	        <div>
                    <nav className="navbar navbar-light bg-faded">
                    <div className="nav-wrapper">
                        <a className="brand-logo"><i class="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link className="nav-links" style={{textDecoration: 'none'}} to="/">Home</Link></li>
                            <li><Logout /></li>
                        </ul>
                    </div>
                    </nav>
                    <div className="text-center">
                        <h3 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h3>
                        {/* {this is where the donors map will go with modal set up} */}
                        <h4>Would you like to become a blood donor :</h4>
                        <p>Please enter your info below</p>
                            {/* <div className="well center-block" id="register-donor-div">
                                    <form id="register-donor-form" onSubmit={this.RegisterDonorForm.bind(this)}>
                                            <input type="text" ref="first_name" placeholder="First Name" /><br></br>
                                            <input type="text" ref="last_name" placeholder="Last Name" /><br></br>
                                            <input type="text" ref="email" placeholder="Email" /><br></br>
                                            <input type="text" ref="age" placeholder="Age" /><br></br>
                                            <input type="text" ref="phone" placeholder="Phone" /><br></br>
                                            <input type="text" ref="address" placeholder="Address" /><br></br>
                                            <input type="text" ref="blood_group" placeholder="Blood Group" /><br></br>
                                            
                                            <input className="btn btn-danger"  type="submit" />
                                    </form>
                            </div> */}
                    </div>
                <br></br>

            </div>
	    );
  	}
};
 export default withRouter(UserHome)
