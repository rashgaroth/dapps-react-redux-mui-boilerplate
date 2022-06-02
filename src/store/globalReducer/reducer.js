// project imports
import config from 'config';

// action - state management
import * as actionTypes from './constant';

export const initialState = {
  isOpen: [], // for active default menu
  fontFamily: config.fontFamily,
  borderRadius: config.borderRadius,
  opened: true,
  isSearchShow: false,
  isSelectEventShow: true,
  modal: {
    show: false,
    modalType: '',
    title: '',
  },
  wallet: {
    account: '',
    wallet: '',
    balance: '',
  },
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

// eslint-disable-next-line default-param-last
const globalReducer = (state = initialState, action) => {
  let id;
  switch (action.type) {
    case actionTypes.MENU_OPEN:
      id = action.id;
      return {
        ...state,
        isOpen: [id],
      };
    case actionTypes.SET_MENU:
      return {
        ...state,
        opened: action.opened,
      };
    case actionTypes.SET_FONT_FAMILY:
      return {
        ...state,
        fontFamily: action.fontFamily,
      };
    case actionTypes.SET_BORDER_RADIUS:
      return {
        ...state,
        borderRadius: action.borderRadius,
      };
    case actionTypes.SEARCH_VISIBILITY:
      return {
        ...state,
        isSearchShow: action.isSearchShow,
      };
    case actionTypes.SELECT_EVENT_VISIBILITY:
      return {
        ...state,
        isSelectEventShow: action.isSelectEventShow,
      };
    case actionTypes.SET_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          show: action.show,
          modalType: action.modalType,
          title: action.title,
        },
      };
    case actionTypes.SET_ACCOUNT:
      return {
        ...state,
        wallet: {
          ...state.wallet,
          account: action.account,
          wallet: action.wallet,
          balance: action.balance,
        },
      };
    default:
      return state;
  }
};

export default globalReducer;
