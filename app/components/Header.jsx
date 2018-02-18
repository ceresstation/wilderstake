import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown
} from 'react-bootstrap'


class HeaderComponent extends Component {
  
  componentDidMount() {
    const { dispatch, Account: { actions: { useMetaMask } } } = this.props
    dispatch(useMetaMask())
  }
  
  render() {
    const { dispatch, Main: { navItems } } = this.props
    
    
    return (
      <div style={{ paddingBottom: '25px' }}>
        <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <span><a href="#" onClick={() => { dispatch(push('/')) }}>WilderStake | Conservation, Together</a></span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            { navItems.map((item, i) => {
              const { url, name } = item
              return (
                <NavItem key={i} eventKey={i} onClick={() => { dispatch(push(url)) }}>
                  {name}
                </NavItem>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
    
  }
}

const mapStoreToProps = (store, props) => {
  return {
    Main: store.Main,
    Account: store.Account
  }
}

const Header = connect(mapStoreToProps)(HeaderComponent)

export default Header;


// const React = require('react');
// const { Link } = require('react-router-dom');

// const items = [
//   {
//     name: 'Home',
//     url: '/',
//   },
//   {
//     name: 'About',
//     url: '/about',
//   },
//   {
//     name: 'Contribute',
//     url: '/contribute',
//   },
//   {
//     name: 'Vote',
//     url: '/vote',
//   },
// ]

// const Header = function() {
//   return (
//     <div style={{ background: 'white', zIndex: 200, height: 42, width: '100%', borderBottomStyle: 'solid', borderBottomColor: '#ddd', borderBottomWidth: 1, position: 'fixed' }}>
//       <div style={{ display: 'inline-block' }}>
//         <img style={{ width: 41, height: 41 }} src={"https://cdn.glitch.com/471debc4-30c7-4d8b-8218-7591bd219e08%2Flogo.png?1518851333557"} />
//       </div>
//       <div style={{ display: 'inline-block', float: 'right', paddingTop: 6 }}>
//         {items.map((item, i) => (
//           <span style={{ fontSize: 20, paddingRight: 12 }} key={i}>
//             <Link style={{ color: '#333' }} to={item.url}>{item.name}</Link>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// module.exports = Header;