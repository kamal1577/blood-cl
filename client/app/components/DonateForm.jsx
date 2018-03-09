import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class DonateForm extends Component{
    constructor(props) {
       super(props);
   
       this.state = {
        //   value: 1,
          blood_group: '',
          donors: []
     
       };
     }
   
    //    submit(e){
        addDonor(e){
           e.preventDefault();
           let data = {
                first_name: this.refs.first_name.value,
                last_name: this.refs.last_name.value,
                email: this.refs.email.value,
                age: this.refs.age.value,
                phone: this.refs.phone.value,
                address: this.refs.address.value
           };
           var request = new Request('http://localhost:8000/api/new-donor', {
               method: 'POST',
               headers: new Headers({'content-type': 'application/json', 'accept': 'application/json'}),
               body: JSON.stringify(data)
            });

            fetch(request)
              .then(function(response) {
                  response.json()
                    .then(function(data) {
                        console.log(data)
                    })
              })
           
        //    const newDonor = {
        //     first_name: this.refs.first_name.value,
        //     last_name: this.refs.last_name.value,
        //     email: this.refs.email.value,
        //     age: this.refs.age.value,
        //     phone: this.refs.phone.value,
        //     address: this.refs.address.value
        //    }
        //    console.log( JSON.stringify(newDonor));
        //    fetch('/api/register-donor', {
    
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
        //     // this.props.history.push("/");
        // })
        // .catch(err=>console.error(err));
        
           
   
    //    browserHistory.push('/thanks');
       }
   
       handleBgroup(e){ 
       e.preventDefault();
       cosole.log(e)
       this.setState({
       blood_group: e.target.childNodes[0].nodevalue});
       console.log(this.state.blood_group);
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
    				<h4>Would you like to become a blood donor :</h4>
                    <p>Please enter your info below</p>
                    <div className="well center-block" id="donate-div">
                            {/* <form id="donate-form" onSubmit={this.submit.bind(this)}> */}
                            <form ref="donateForm">
                                    <input type="text" ref="first_name" placeholder="First Name" /><br></br>
                                    <input type="text" ref="last_name" placeholder="Last Name" /><br></br>
                                    <input type="text" ref="email" placeholder="Email" /><br></br>
                                    <input type="text" ref="age" placeholder="Age" /><br></br>
                                    <input type="text" ref="phone" placeholder="Phone" /><br></br>
                                    <input type="text" ref="address" placeholder="Address" /><br></br>
                                    <button className="btn btn-danger" onClick={this.addDonor.bind(this)}>Add Donor</button>    
                                    
                                      {/* <div className="dropdown show">
                                            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                               Choose your Blood Group here
                                            </a>

                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink" onChange={this.handleBgroup.bind(this)}>
                                                <a className="dropdown-item" href="#">A+</a><br></br>
                                                <a className="dropdown-item" href="#">B+</a><br></br>
                                                <a className="dropdown-item" href="#">AB+</a><br></br>
                                                <a className="dropdown-item" href="#">O+</a><br></br>
                                                <a className="dropdown-item" href="#">A-</a><br></br>
                                                <a className="dropdown-item" href="#">B-</a><br></br>
                                                <a className="dropdown-item" href="#">AB-</a><br></br>
                                                <a className="dropdown-item" href="#">0-</a><br></br>
                                            
                                            </div>
                                      </div> */}
                                      <br></br>
                                         
                                            {/* <input className="btn btn-danger"  type="submit"  /> */}
                            </form>
                    </div>
               </div>
	     </div>
	    );
  	}
};
export default withRouter(DonateForm)
