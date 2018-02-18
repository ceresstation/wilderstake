import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  Button
} from 'react-bootstrap'


class ContributeComponent extends Component {
  constructor(ops) {
    super(ops)
  }
  
  
  render() {
    const { dispatch, Account: { 
      address, 
      metaMaskLocked,
      metaMaskInstalled
    } } = this.props
    
    console.log('address', address)
    console.log('metaMaskLocked', metaMaskLocked)
    console.log('metaMaskInstalled', metaMaskInstalled)
    
    if (!metaMaskInstalled) {
      return (
        <p>Please Install MetaMask</p>
      )
    } else if (metaMaskLocked) {
      return (
        <p>Please Unlock MetaMask & Refresh</p>
      )
    } else {
      return (
        <div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 600, maxWidth: '80%', margin: '0 auto' }}>
              <div style={{ fontSize: 50 }}>
                How much Stake would you like to buy?
              </div>
              <div style={{ paddingTop: 12 }}>
                <div style={{ fontSize: 20, paddingRight: 8, display: 'inline-block', verticalAlign: 'top' }}>
                  <input />
                </div>
                <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
                  <Button style={{ backgroundColor: '#567D3E', color: 'white' }}> Preserve </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
}


const mapStoreToProps = (store, props) => {
  return {
    Main: store.Main,
    Account: store.Account
  }
}

const Contribute = connect(mapStoreToProps)(ContributeComponent)

export default Contribute