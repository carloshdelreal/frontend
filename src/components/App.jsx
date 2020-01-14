import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Profile from './profile';
import SearchDoctor from './searchDoctor';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <div className="p-3">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Profile} />
              <Route path="/doctor" component={SearchDoctor} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
