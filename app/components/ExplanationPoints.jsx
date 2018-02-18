import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Row,
  Col,
  Panel
} from 'react-bootstrap'

class ExplanationPointsComponent extends Component {
  constructor(ops) {
    super(ops)
  }
  
  render() {
    const { Main: { explanationPoints } } = this.props
    
    return (
      <Row>
        { 
          explanationPoints.map((point, i) => {
            const { title, description } = point 
            return (
              <Col lg={4} key={i}>
                <Panel bsStyle="warning">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3">{ title }</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>{ description }</Panel.Body>
                </Panel>
              </Col>
            )
          }) 
        }
      </Row>
    )
  }
}


const mapStoreToProps = (store, props) => {
  return {
    Main: store.Main
  }
}

const ExplanationPoints = connect(mapStoreToProps)(ExplanationPointsComponent)

export default ExplanationPoints