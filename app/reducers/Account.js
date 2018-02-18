import AccountActions from '../actions/Account'

const DEFAULT_ACCOUNT_STATE = {
  actions: new AccountActions({}),
  address: '',
  metaMaskInstalled: 'false',
  metaMaskLocked: 'true',
  network: '',
}

export default function Account(state=DEFAULT_ACCOUNT_STATE, action) {
  const { type, id, value } = action
  switch(type) {
    case 'SET_ACCOUNT_DETAILS':
      return {
        ...state,
        [id]: value
      }
    default:
      return state
  }
}