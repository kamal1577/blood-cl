import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



export default class Thanks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donors: [],
            // data:[]
        };
    }
	componentWillMount(){
        // hit api to get the data from the table GET api/all-donors
        var that = this;
         fetch('http://localhost:8000/api/all-donors')
            .then(function(response){
                response.json()
                  .then(function(donors){
                      console.log(donors)
                      that.setState({
                          donors: donors
                      })
                  })
            })
    
   
    var request = new Request('/api/all-donor', {
        method: 'GET',
        headers: new Headers({'content-type': 'application/json', 'accept': 'application/json'}),
        body: JSON.stringify(donors)
     });
     let donors = that.state.donors;
                 donors.push(donors);
                 that.setState({
                     donors: donors
                 })

     fetch(request)
       .then(function(response) {
           response.json()
             .then(function(donors) {
            })
        }).catch(function(err) {
            console.log(err)
        })
            
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
                
                            <h5>Thanks for your noble participation ...!  </h5><br></br>
                            <h5> Now you could request or donate blood when it's needed by using this app of generous people info.</h5><br></br>
                            <table class="table table-dark">
                                <thead>
                                  <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col">Name</th>
                                    <th scope="col">Blood Group</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">zip</th>
                                    
                                  </tr>
                                </thead>
                                <tbody>
                            {donors.map((donor) => {
                                return (
                                  <tr key={donor.id}>
                                    {/* <th scope="row">1</th> */}
                                    <td>{donor.name}</td>
                                    <td>{donor.blood_group}</td>
                                    <td>{donor.phone}</td>
                                    <td>{donor.zip}</td>
                                    
                                  </tr>
                                )
                                })
                            }
                                </tbody>
                            </table>
                              

                    
                </div>
            </div>    
	    );
  	}
};
