import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CandyList from './components/candyList';
import store from './store';
import Root from './components/root';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';
import SingleCandy from './components/singleCandy';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Root} />
        <Route exact path="/candies" component={CandyList} />
        <Route path="/candies/:id" component={SingleCandy} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('main')
);
