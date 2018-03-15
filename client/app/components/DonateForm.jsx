import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { FormErrors } from './FormErrors';

class DonateForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameValid: false,
            emailValid: false,
            ageValid: false,
            phoneValid: false,
            zipValid: false,
            blood_groupValid: false,
            nameError: false,
            emailError: false,
            ageError: false,
            phoneError: false,
            zipError: false,
            blood_groupError: false,
            donors: []
       }
    }


     componentDidMount(){
         console.log('COMPONENT HAS MOUNTED');
         var that = this;
         fetch('http://localhost:8000/api/new-donor')
            .then(function(response){
                response.json()
                .then(function(data){
                    that.setState({
                        donors: data
                    })
                })
            })
          
        }
         addDonor(e) {
            var that = this;
           e.preventDefault();
           let donor_data = {
                name: this.refs.name.value,
                email: this.refs.email.value,
                age: this.refs.age.value,
                phone: this.refs.phone.value,
                zip: this.refs.zip.value,
                blood_group: this.refs.blood_group.value,
                id: Math.random().toFixed(3)
           };

           var request = new Request('/api/new-donor', {
               method: 'POST',
               headers: new Headers({'content-type': 'application/json', 'accept': 'application/json'}),
               body: JSON.stringify(donor_data)
            });
            let donors = that.state.donors;
                        donors.push(donor_data);
                        that.setState({
                            donors: donors
                        })

            fetch(request)
              .then(function(response) {
                  response.json()
                    .then(function(data) {
                    
                         that.props.history.push("/thanks")
                                                                        
                    })
              }).catch(function(err) {
                  console.log(err)
              });
                this.refs.name.value = ''
                this.refs.email.value = ''
                this.refs.age.value = ''
                this.refs.phone.value = ''
                this.refs.zip.value = ''
                this.refs.blood_group.value = ''
           
       } //close addDonor

       onEmailChange(){
        const email = this.refs.email.value;
        if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            this.setState({
                emailValid: true,
                emailError: false
            })
        } else {
            this.setState({
                emailValid: false,
                emailError: true
            })
        }
    }
    onNameChange(){
        const name = this.refs.name.value;
        if(name !== "" && name.match(/^[^0-9]+$/)){
            this.setState({
                nameValid: true,
                nameError: false
            })
        } else {
            this.setState({
                nameValid: false,
                nameError: true
            })
        }
    }

    onAgeChange(){
        const age = this.refs.age.value;
        if(age!== "" && age >= 18 && age <= 65){
            this.setState({
                ageValid: true,
                ageError: false
            })
        } else {
            this.setState({
                ageValid: false,
               ageError: true
            })
        }
    }
    onPhoneChange(){
        const phone= this.refs.phone.value;
        if(phone !== "" && phone.match(/^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
            this.setState({
                phoneValid: true,
                phoneError: false
            })
        } else {
            this.setState({
                phoneValid: false,
                phoneError: true
            })
        }
    }
    onZipChange(){
        const zip = this.refs.zip.value;
        if(zip !== "" && zip.match(/^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/)){
            this.setState({
                zipValid: true,
                zipError: false
            })
        } else {
            this.setState({
                zipValid: false,
                zipError: true
            })
        }
    }
    
    onBlood_groupChange(){
        const blood_group = this.refs.blood_group.value;
        if(blood_group !=="" && blood_group.match( /^(A|B|AB|O)[-+]$/)) {
            this.setState({
                blood_groupValid: true,
                blood_groupError: false
            })
        } else {
            this.setState({
               blood_groupValid: false,
               blood_groupError: true
            })
        }
    }
    
   
                                        

  	render() {
          let donors = this.state.donors;
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
    				<h4 className="center">Find the hero in you be a Blood Donor :</h4>
                    <h5 className= "center"><strong>Donor Registration Form</strong></h5>
                     <h6 className= "center" style={{color:'red'}}>We respect your privacy. We will never rent, sell or give away your email to any third party.</h6>

                    
                    <div className="row">
                      <div className=" col-md-4 col-md-offset-4">
                           
                         <form onSubmit={this.addDonor.bind(this)}>
                                    <input type="text" ref="name" placeholder="Name" onChange={this.onNameChange.bind(this)} /><br></br>
                                    {this.state.nameError ? <div><span style={{position:'absolute',marginTop:'-20px', color:'red'}}> Enter name without numbers</span></div> : <div></div>}
                                    <input type="text" ref="email" placeholder="Email" onChange={this.onEmailChange.bind(this)} /><br></br>
                                    {this.state.emailError ? <div><span style={{position: 'absolute', marginTop: '-20px', color: 'red'}}>Please enter valid email</span></div> : <div></div>}
                                    <input type="number" ref="age" placeholder="Age" onChange={this.onAgeChange.bind(this)} /><br></br>
                                    {this.state.ageError ? <div><span style={{position: 'absolute', marginTop: '-20px', color: 'red'}}>Please enter two digits between 18 and 65 </span></div> : <div></div>}
                                    <input type="number" ref="phone" placeholder="Phone" onChange={this.onPhoneChange.bind(this)}  /><br></br>
                                    {this.state.phoneError ? <div><span style={{position: 'absolute', marginTop: '-20px', color: 'red'}}>Phone number must be 10 digits without(-) </span></div> : <div></div>}                                   
                                    <input type="number" ref="zip" placeholder="zip" onChange={this.onZipChange.bind(this)}/><br></br>
                                    {this.state.zipError ? <div><span style={{position: 'absolute', marginTop: '-20px', color: 'red'}}>Zip code must be 5 digits </span></div> : <div></div>}                 
                                    <input type="text" ref="blood_group" placeholder="Blood Group" onChange={this.onBlood_groupChange.bind(this)} /><br></br>
                                    {this.state.blood_groupError ? <div><span style={{position: 'absolute', marginTop: '-20px', color: 'red'}}>Please enter your blood type as (A-,B+,AB-,O-,O+...) </span></div> : <div></div>}
                                    
                                       {
                                         this.state.nameValid && this.state.emailValid &&  this.state.ageValid  && this.state.phoneValid && this.state.zipValid && this.state.blood_groupValid ?
                                            <input className="btn btn-info" type="submit"/> :
                                            <input className="btn btn-info" type="submit" disabled={true}/>
                                      }

                                      <br></br>
                                      
                                      {/* <button className="btn btn-danger" onClick={this.addDonor.bind(this)}>Add Donor</button>  */}
                                           
                            </form>
                               <div className="DonateForm">
                               {donors.map(donor => <div key={donor.id}>{donor.name}|{donor.zip}|{donor.blood_group} </div>)}                   
                                 </div>    
                          </div>  
                    </div>
               </div>
	     </div>
	    );
  	}
};
export default withRouter(DonateForm)
