import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Switch, Router, Route } from 'react-router-dom'
import { store, history } from './store.js'


/* Import Components */
import ExplanationPoints from './components/ExplanationPoints.jsx'
import Header from './components/Header.jsx'
import HomeContent from './components/HomeContent.jsx'
import Contribute from './components/Contribute.jsx'
import Vote from './components/Vote.jsx'

import { Grid } from 'react-bootstrap'

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Grid>
        <Header />
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/" component={HomeContent} />
          <Route path="/about" component={ExplanationPoints} />
          <Route path="/contribute" component={Contribute} />
          <Route path="/vote" component={Vote} />
        </div>
      </Grid>
    </Provider>
  </Router>,
  document.getElementById('main')
);


//  OKay, let's work on app/components/HomeContent.jsx file Together... see you over there.
// hey going to add you to the 