import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home';
import SearchDoctor from './searchDoctor';
import DoctorProfile from './doctorProfile';
import BookAppointment from './bookAppoint';
import ModalComponent from './modal';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doctor" exact component={SearchDoctor} />
            <Route path="/doctor/:id" component={DoctorProfile} />
            <Route path="/book/:id" component={BookAppointment} />
            <Route path="/about" render={() => <div>About</div>} />
            <Route path="/modal" component={ModalComponent} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
