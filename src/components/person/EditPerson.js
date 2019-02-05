import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/peoples';

class EditPerson extends Component {
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

  handleSubmit = (event) => {

    event.preventDefault();
    const firstname = this.getFirstname.value;
    const lastname = this.getLastname.value;
    const mail = this.getMail.value;
    const phone = this.getPhone.value;
    const adress = this.getAdress.value;
    const data = { firstname, lastname, mail, phone, adress }

    let uri = API_URL+'/'+this.props.match.params.id;
  
    axios.put(uri, data).then((response) => {
      console.log(response);
      this.props.history.push('/');
    })
    .catch(error => {
      console.log(error);
    });
    
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
                <h1>Edit person</h1>
                <p class="lead">Witch React js</p>
              </div>
            </div>

            <div className="section">
              <form onSubmit={this.handleSubmit}>
                <div className="box-body">
                    <br></br><br></br>
                      <div class="col-sm-6">
                        <div className="form-group">
                            <label>Firstname</label>
                                <input
                                  type="text"
                                  className="form-control" 
                                  defaultValue={firstname}
                                  placeholder=""
                                  ref={(input) => this.getFirstname = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Lastname</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder=""
                                  defaultValue={lastname}
                                  ref={(input) => this.getLastname = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Mail</label>
                                <input
                                  type="text"
                                  className="form-control" 
                                  placeholder=""
                                  defaultValue={mail}
                                  ref={(input) => this.getMail = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>	Phone	</label>
                                <input
                                  type="text"
                                  className="form-control" 
                                  placeholder=""
                                  defaultValue={phone}
                                  ref={(input) => this.getPhone	 = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Adress</label>
                              <textarea 
                                class="form-control" 
                                rows="1"
                                defaultValue={adress}
                                // placeholder={adress}
                                ref={(input) => this.getAdress = input}
                              /> 
                        </div>
                      </div>
                      <div className="box-footer">
                          <Link to='/' className="btn btn-sm">Return </Link> 
                          <button type="submit" className="btn btn-primary btn-sm ">Update</button>
                      </div>
                </div>
              </form>
            </div>
        </div> 
    );
  }
}

export default EditPerson;
