import { combineReducers } from 'redux';

// Please don't remove this comment, this can be affected to your plopfile
import mint from 'containers/Minting/store/reducer';
// REDUCERIMPORT
import globalReducer from './globalReducer/reducer';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  globalReducer,
  // Please don't remove this comment, this can be affected to your plopfile
  mint,
  // COMBINEREDUCER
});

export default reducer;
