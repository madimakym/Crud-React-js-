import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


const API_URL = 'http://localhost:8000/api/peoples';


class CreatePerson extends Component {
  constructor(props) {
    super();
      this.state = {
        success: false,
        isNumber: false,
        value: 0,
        todos: []
      }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const firstname = this.getFirstname.value;
    const lastname = this.getLastname.value;
    const mail = this.getMail.value;
    const phone = this.getPhone.value;
    const adress = this.getAdress.value;

    if (!(isNaN(phone))) {

      const data = { firstname, lastname, mail, phone, adress }
      axios.post(API_URL, data).then((response) => {
      });

        this.getFirstname.value = '';
        this.getLastname.value = '';
        this.getMail.value = '';
        this.getPhone.value = '';
        this.getAdress.value = '';
        this.setState({
          success: true
        })
     } else {
      this.setState({
        isNumber: true
      })
    }
  }


  renderValidated() {
    if(this.state.isNumber) {
      return (
        <p class="text-danger">Number required!</p>
      );
    } else {
      return (
        null
      );
    }
  }

  renderSuccess(){
    if(this.state.success) {
      return (
        <div class="alert alert-dismissible alert-primary">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <strong>Success!</strong> The form has been submitted successfully
        </div>
      );
    } else {
      return (
        null
      );
    }
  }

  render() {
    return (
      <div className="container"> 
          <br></br><br></br>
            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-6">
                <h1>Create person</h1>
                <p className="lead">Witch React js</p>
              </div>
            </div>
           
            {this.renderSuccess()} 
            {this.renderValidated()} 
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
                                  required 
                                  placeholder=""
                                  ref={(input) => this.getFirstname = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Lastname</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  required 
                                  placeholder=""
                                  ref={(input) => this.getLastname = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Mail</label>
                                <input
                                  type="text"
                                  className="form-control" 
                                  placeholder=""
                                  ref={(input) => this.getMail = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>	Phone	</label>
                                <input
                                  type="text"
                                  className="form-control" 
                                  required
                                  placeholder=""
                                  ref={(input) => this.getPhone	 = input}
                                />
                        </div>

                        <div className="form-group">
                            <label>Adress</label>
                              <textarea 
                                class="form-control" 
                                rows="1"
                                ref={(input) => this.getAdress = input}
                              ></textarea>
                        </div>
                      </div>
                      <div className="box-footer">
                          <button type="submit" className="btn btn-primary btn-sm ">Save</button>
                      </div>
                </div>
            </form>
            </div>
        </div> 
    );
  }
}

export default CreatePerson;
