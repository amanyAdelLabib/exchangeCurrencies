import {
    GET_CURRENCIES_TYPES_PENDING,
    GET_CURRENCIES_TYPES_FAIL,
    GET_CURRENCIES_TYPES_SUCCESS
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    allCurrenciesLoading:false
  
  };
  
  export const getCurrenciesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case GET_CURRENCIES_TYPES_PENDING: {
        return {
          ...state,
          allCurrenciesLoading: true,
        };
      }
  
      // ************************ success *****************
      case GET_CURRENCIES_TYPES_SUCCESS: {
        const {response} = action.payload;
        console.log('resssssssssssssssssssssssss')
        console.log(response)
        return {
          ...state,
          data: response,
          allCurrenciesLoading: false,
        };
      }

      // ************************ error *****************

      case GET_CURRENCIES_TYPES_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          allCurrenciesLoading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
