import {
    GET_CURRENCIES_FOR_CHART_FAIL,
    GET_CURRENCIES_FOR_CHART_SUCCESS,
    GET_CURRENCIES_FOR_CHART_PENDING
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    allCurrenciesChartLoading:false
  
  };
  
  export const getCurrenciesChartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case GET_CURRENCIES_FOR_CHART_PENDING: {
        return {
          ...state,
          allCurrenciesChartLoading: true,
        };
      }
  
      // ************************ success *****************
      case GET_CURRENCIES_FOR_CHART_SUCCESS: {
        const {response} = action.payload;
        console.log('resssssssssssssssssssssssss')
        console.log(response)
        return {
          ...state,
          data: response,
          allCurrenciesChartLoading: false,
        };
      }

      // ************************ error *****************

      case GET_CURRENCIES_FOR_CHART_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          allCurrenciesChartLoading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
