import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import New from './components/New';
import Show from './components/Show';
import Edit from './components/Edit';
import Main from './components/Main';
import history from './history';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/users" exact component={List} />
            <Route path="/add_user" exact component={New} />
            <Route path="/users/:id" exact component={Show} />
            <Route path="/users/:id/edit" exact component={Edit} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
