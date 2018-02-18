import React, { Component } from 'react'
import { push } from 'react-router-redux'
// use `connect` method to connect our redux state to our react component
import { connect } from 'react-redux' 
import ExplanationPoints from './ExplanationPoints'


import {
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap'

// Using React ES6 Component Class 
// NOTE: We are not exporting this component, but the "connected" component below...
class HomeContentComponent extends Component {
  constructor(ops) {
    super(ops) // we must use `super` because we are extending the component class
    // Any component state you want to instantiate when the class is called goes here.
  }
  
  /*
    
    Let's go ahead and define some tasks for this component:
    
    - [X] Add Grid/Responsive Layout to MainContent using React Bootstrap
    - [X] Add a landing page appeal and sign up method button.
    - [X] Use MetaMask; TODO: implement signing
    - [ ] Showcase voting process / past votes / current ballots
    - 
  
    
  */
  
  
  // Requires a `render` method, which returns html
  render() {
    const { dispatch } = this.props
    return (
      <div>
        <Row>
          <Col lg={12}>
            <Jumbotron style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundImage: 'url(https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Fsergei-akulich-47326.jpg?1518850404671)'
              }}>
              <Row>
                <Col lg={12}>
                  <center style={{ color: 'white' }}>
                    <h1 style={{ paddingTop: 8}}>
                      WilderStake
                    </h1>
                    <h2 className="bold">
                      Conservation, Together
                    </h2>
                  </center>
                </Col>
              </Row>
              <br/>
              <br/>
              <br/>
              <ExplanationPoints />
              <br/>
              <br/>
              <Row>
                <Col lg={12}>
                  <Button 
                    bsSize={'sm'} 
                    bsStyle={'warning'}
                    onClick={() => { dispatch(push('/contribute')) }}
                    block>
                    Become a Member!
                  </Button>
                </Col>
              </Row>
            </Jumbotron>
          </Col>
        </Row>
      </div>
    )
  }
}


const mapStoreToProps = (store, props) => {
  // Rather than passing the entire redux store to each component, we use this method to
  // Only return the parts of the redux store we wish to display/render
  // store includes our redux store reducers (e.g. Main)
  return {
    Main: store.Main 
  }
}

const HomeContent = connect(mapStoreToProps)(HomeContentComponent)

// Finally, we have composed our React component using Redux & Connect-- 
// we can export it for use as our default export in this file.
export default HomeContent;
