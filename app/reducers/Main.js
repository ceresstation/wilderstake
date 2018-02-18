const DEFAULT_MAIN_STATE = {
// Put initial main state here...
  navItems: [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Contribute',
      url: '/contribute',
    },
    {
      name: 'Vote',
      url: '/vote',
    }
  ],
  explanationPoints: [
    {
      title: '1. Buy stake',
      description: 'Buy stake for Eth so that you can participate in conservation elections. So impactful! WoW! Impact!'
    },
    {
      title: '2. Vote on land to preserve',
      description: 'Propose and vote on plots of land that you find important to preserve.'
    },
    {
      title: '3. We\'ll take care of the rest',
      description: 'We complete the buy orders and add the land to our trust. If the buy is not possible, you\'ll get your tokens back!'
    },

  ]
}


export default function Main(state=DEFAULT_MAIN_STATE, action) {
  const { type, id, value } = action
    
  switch(type) {
    case 'SET_MAIN_DETAILS':
      // Set top level values for main state
      return {
        ...state,
        [id]: value
      }
    default:
      return state;
  }
  
}