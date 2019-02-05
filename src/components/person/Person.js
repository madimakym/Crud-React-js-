import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
const MAX_LENGTH = 25;

class Person extends Component {
  constructor(props) {
    super();
      this.state = {
        persons: [],
        currentPage: 1,
        dataPerPage: 8
      };
      this.handleClick = this.handleClick.bind(this);
  }

componentDidMount() {
    
    this.showPeople();
  
  }


handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


showPeople() {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/api/peoples'
    }).then(res => {
      this.setState({
        persons: res.data
      })
    });
  }


onclickDelete(value){
    axios({
      method: 'DELETE',
      url: `http://localhost:8000/api/peoples/${value}`
    })
    .then(res => {
      console.log(res);
      console.log(res.data );
      window.location.reload();
    })
  }


  render() {
  
    const { persons, currentPage, dataPerPage } = this.state;
     // Logic for displaying current data
     const indexOfLastTodo = currentPage * dataPerPage;
     const indexOfFirstTodo = indexOfLastTodo - dataPerPage;
     const currentData = persons.slice(indexOfFirstTodo, indexOfLastTodo);

     const renderData = currentData.map((person, i) => {
          return (
            <Fragment key={i}>
              <tr>
                <td>{person.id}</td>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                <td>{person.mail}</td>
                <td>{person.phone}</td>
                <td className="adress">{`${person.adress.substring(0, MAX_LENGTH)}...`}</td>
                <td>
                  <center> 
                    <Link  to={`/person/show/${person.id}`} className="btn btn-primary btn-sm btn-update">View</Link>  
                    <Link  to={`/person/edit/${person.id}`} className="btn btn-sm btn-update">Edit</Link>  
                    <button onClick={()=>this.onclickDelete(person.id)} className="btn btn-danger btn-sm">Delete</button> 
                  </center>
                </td>
              </tr>
            </Fragment>
          )
        }); 

      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(persons.length / dataPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={this.handleClick}
            className="page-item page-link"
          >
            {number}
          </li>
        );
      });

    return (
      <div className="container">
        <br></br><br></br>
          <div class="row">
            <div class="col-lg-8 col-md-7 col-sm-6">
              <h1>All peoples</h1>
              <p class="lead">Witch React js</p>
            </div>
          </div>
         <div>
         <table class="table table-hover">
              <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Firstname</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Adress</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
            <tbody>
              {renderData}
          </tbody>
          </table>
          <ul className="pagination pagination-sm">
              <li className="page-item">
                <a className="page-link" href>&laquo;</a>
              </li>
                {renderPageNumbers}
              <li className="page-item">
                <a className="page-link" href>&raquo;</a>
              </li>
          </ul>

          

        </div>
      </div>
    );
  }
}

export default Person;
