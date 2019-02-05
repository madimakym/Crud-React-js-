import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import CreatePerson from './components/person/CreatePerson'
import Person from './components/person/Person'
import ShowPerson from './components/person/ShowPerson'
import EditPerson from './components/person/EditPerson'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Person} />
            <Route path='/create' component={CreatePerson}/>
            <Route path="/person/show/:id" component={ShowPerson} />
            <Route path="/person/edit/:id" component={EditPerson} />
            <Redirect to="/" />
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default App
