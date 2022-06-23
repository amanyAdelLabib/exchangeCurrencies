import {
    CONVERT_CURRENCY_PENDING,
    CONVERT_CURRENCY_FAIL,
    CONVERT_CURRENCY_SUCCESS,
  
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    exchangeCurrencyLoading:false
  
  };
  
  export const convertCurrencyReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case CONVERT_CURRENCY_PENDING: {
        return {
          ...state,
          exchangeCurrencyLoading: true,
        };
      }
  
      // ************************ success *****************
      case CONVERT_CURRENCY_SUCCESS: {
        const {response} = action.payload;
        return {
          ...state,
          data: response,
          exchangeCurrencyLoading: false,
        };
      }

      // ************************ error *****************

      case CONVERT_CURRENCY_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          exchangeCurrencyLoading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
