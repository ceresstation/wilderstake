const { BrowserRouter, Route } = require('react-router-dom');

const React = require('react');
const ExplanationPoints = require('./ExplanationPoints');
const Header = require('./Header');
const HomeContent = require('./HomeContent');
const Contribute = require('./Contribute');
const Vote = require('./Vote');

/* the main page for the index route of this app */
const Home = function() { 
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div style={{ paddingTop: 50 }}>
          <Route exact path="/" component={HomeContent} />
          <Route path="/about" component={ExplanationPoints} />
          <Route path="/contribute" component={Contribute} />
          <Route path="/vote" component={Vote} />
        </div>
      </div>
    </BrowserRouter>
  );
}

module.exports = Home;