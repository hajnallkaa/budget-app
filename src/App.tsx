import React, { FC } from 'react';
import Budget from './components/Budget';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Main from './components/Main';
import  Statistics  from './components/Statistics';
import  Months  from './components/Months';

const App: FC = () => (
  <Router>
  <div className="App">
    <Switch>
      <Route exact path="/">
          <Main/>
      </Route>
      <Route path="/budget">
          <Budget/>
      </Route>
      <Route path="/statistics">
          <Statistics/>
      </Route>
      <Route path="/months">
          <Months/>
      </Route>
  </Switch>
  </div>
  </Router>
);

export default App;
