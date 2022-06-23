import {
    GET_CURRENCIES_RATE_FAIL,
    GET_CURRENCIES_RATE_PENDING,
    GET_CURRENCIES_RATE_SUCCESS
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    allCurrenciesRateLoading:false
  
  };
  
  export const getCurrenciesRateReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case GET_CURRENCIES_RATE_PENDING: {
        return {
          ...state,
          allCurrenciesRateLoading: true,
        };
      }
  
      // ************************ success *****************
      case GET_CURRENCIES_RATE_SUCCESS: {
        const {response} = action.payload;
        console.log('resssssssssssssssssssssssss')
        console.log(response)
        return {
          ...state,
          data: response,
          allCurrenciesRateLoading: false,
        };
      }

      // ************************ error *****************

      case GET_CURRENCIES_RATE_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          allCurrenciesRateLoading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
