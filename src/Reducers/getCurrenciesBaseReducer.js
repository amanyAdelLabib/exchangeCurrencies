import {
    GET_CURRENCIES_BASE_FAIL,
    GET_CURRENCIES_BASE_PENDING,
    GET_CURRENCIES_BASE_SUCCESS
  
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    getCurrencyBaseLoading:false
  
  };
  
  export const getCurrenciesBaseReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case GET_CURRENCIES_BASE_PENDING: {
        return {
          ...state,
          getCurrencyBaseLoading: true,
        };
      }
  
      // ************************ success *****************
      case GET_CURRENCIES_BASE_SUCCESS: {
        const {response} = action.payload;
        return {
          ...state,
          data: response,
          getCurrencyBaseLoading: false,
        };
      }

      // ************************ error *****************

      case GET_CURRENCIES_BASE_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          getCurrencyBaseLoading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
