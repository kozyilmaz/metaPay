const INITIAL_STATE = {
  user: '',
  usd_amt: 0,
  eth_price: 0,
  nonce: 0,
  web3_provider: null
}

export default function metaPay(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.result
      };
      break;
    case 'UPDATE_USD_AMT':
      return {
        ...state,
        usd_amt: action.result
      };
      break;
    case 'UPDATE_ETH_PRICE':
      return {
        ...state,
        eth_price: action.result
      };
      break;
    case 'UPDATE_NONCE':
      return {
        ...state,
        nonce: action.result
      };
      break;
    case 'UPDATE_WEB3_PROVIDER':
      return {
        ...state,
        web3_provider: action.result
      }
    default:
      return state;
  }
}
