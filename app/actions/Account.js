import Web3 from 'web3'
import { promisifyAll } from 'bluebird'

export default class Account {
  constructor({ web3Provider }) {
    
  }
  
  useMetaMask() {
    return (dispatch) => {
      if (typeof window.web3 !== 'undefined') {
        console.log('Use MetaMask')
        window.web3 = new Web3(window.web3.currentProvider)
        window.web3.eth = promisifyAll(window.web3.eth)
        window.web3.version = promisifyAll(window.web3.version) 
        window.web3.eth.getAccountsAsync().then((accounts) => {
          dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskInstalled', value: true })
          if (!accounts.length) {
            dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskLocked', value: true })
          } else {
            dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'address', value: accounts[0] })
            dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'metaMaskLocked', value: false })
            return window.web3.version.getNetworkAsync()
          }
        }).then((network) => {
          dispatch({ type: 'SET_ACCOUNT_DETAILS', id: 'network', value: network })
        }).catch((error) => {
          console.log('error', error)
        })
      } else {
        alert('MetaMask Required! Go Install!')
      }
    }      
  }

}