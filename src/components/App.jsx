import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home';
import SearchDoctor from './searchDoctor';
import DoctorList from '../containers/doctorList';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doctor" component={SearchDoctor} />
            <Route path="/doctor/:id" component={DoctorList} />
            <Route path="/about" render={() => <div>About</div>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
