import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class ShowPerson extends Component {
  constructor(props) {
    super();
      this.state = {
        id: '',
        firstname: '',
        lastname: '',
        mail: '',
        phone: '',
        adress: '',
        person:[]
      }
  }

  componentDidMount() {
    var idPerson = this.props.match.params.id;

    axios.get(`http://localhost:8000/api/peoples/${idPerson}`)
      .then(res => {
        const data = res.data;
        this.setState({ 
          person: data 
         });
      })
      .catch(function (error) {
        console.log(error);
      })  
  }

  render() {

  let id = this.state.person.id;
  let firstname = this.state.person.firstname;
  let lastname = this.state.person.lastname;
  let mail = this.state.person.mail;
  let phone = this.state.person.phone;
  let adress = this.state.person.adress;

    return (
      <div className="container"> 
          <br></br><br></br>
            <div class="row">
              <div class="col-lg-8 col-md-7 col-sm-6">
                <h1>Details person</h1>
                <p class="lead">Witch React js</p>
              </div>
            </div>

            <div className="section">
              <h5> Matricule: <small class="text-muted">{id}</small></h5>
              <h5> Firstname: <small class="text-muted">{firstname}</small></h5>
              <h5> Lastname: <small class="text-muted">{lastname}</small></h5>
              <h5> Mail: <small class="text-muted">{mail}</small></h5>
              <h5> Phone: <small class="text-muted">{phone}</small></h5>
              <h5> Adress: <small class="text-muted">{adress}</small></h5>
              <Link to='/' className="btn btn-sm">Return </Link> 
            </div>
        </div> 
    );
  }
}

export default ShowPerson;
