import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';


import Logout from './Logout';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	user: {},
          donors: []
        };
    }



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


 
  	render() {
      console.log(this.state) // shows the user logged in and donors: results

	    return (
	        <div>
                    <nav className="navbar navbar-light bg-faded">
                        <div className="nav-wrapper">
                            <a className="brand-logo"><i className="material-icons">invert_colors</i>Blood Donation<sup>&reg;</sup></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link className="nav-links" style={{textDecoration: 'none'}} to="/donateform">DonateForm</Link></li>
                                <li><Logout /></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="text-center">
                        <h3 className="homepage-sign-in-confirm">Welcome {this.state.user.name}!</h3> 
                    </div>
                <br></br>
                

                    

                    <div className="container">  

                        <h3>Benefits of Donating Blood</h3><br></br>
                        <span><p>There’s no substitute for blood donation and giving blood regularly saves lives. One single donation can be split into three separate parts, helping, saving or improvising the lives of patients. Just three teaspoons of blood can save the life of a premature baby. If you donate blood, you can help in saving lives of many people.</p></span>

                        <div><h8><strong>Improves Heart Health</strong></h8>
                            <span><p>Donating blood improves your overall cardio vascular health. Increased level of iron in the blood raises the chance of heart diseases. Regularly donating blood helps males in particular to reduce the amount of iron in the blood. This can reduce the chance of heart attack by 88%. Additionally, regular blood donation can lower the risk of severe cardio vascular events such as stroke by 33%.</p></span>
                       </div><br></br>
                       <div> 
                       <h8><strong>Burns calories</strong></h8><br></br>
                       <span><p>Donating blood on a regular basis can also improve fitness. Donating one pint of blood (450ml) burns 650 calories in donor’s body.</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Enhances feeling of well being in elderly people</strong></h8><br></br>
                       <span><p>Many elderly people who are in good health have reported feeling invigorated and re-energized by giving blood on a regular basis</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Reduces the risk of cancer</strong></h8><br></br>
                       <span><p>Give blood to help lower your risk of cancer. According to the Miller- keystone blood center, consistent blood donation is associated with lowered risks of cancers, including liver, lung, colon, stomach and throat cancers. Risk levels drop in correlation with how often participants donate blood.</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Saves lives</strong></h8><br></br>
                       <span><p>By donating blood, many lives are saved and hope is given to many whose situation may otherwise be hopeless. Blood donors give such patients a second chance of life.</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Free health screening done</strong></h8><br></br>
                       <span><p>In addition to all of these benefits, a donor receives a free prior health screening plus mini blood test. There will be an Hb (Haemoglobin) level test as well as a blood pressure and body check.  Blood is also tested for some major diseases and the donor is immediately informed in strict confidentiality if any of these tests show positive results.</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Bring joy to many</strong></h8><br></br>
                       <span><p>When you donate blood, your help not only the patient whose life may depend on your donation, but also all those who depend on that patient. The entire community will benefit from the spirit of generosity.</p></span>
                       </div><br></br>
                       <div>
                       <h8><strong>Blood donation is service to humankind</strong></h8><br></br>
                       <span><p>By donating blood you help the needy and save precious lives.</p></span>
                      </div>
             

                    </div>

             </div>
	    );
  	}
};
 export default withRouter(UserHome)
