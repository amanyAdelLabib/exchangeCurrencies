import {
    FIND_LOCATION_FAIL,FIND_LOCATION_SUCCESS,FIND_LOCATION_Pending
  } from '../Actions/types';
  
  const initialState = {
    data: {},
    errors: [],
    loading:false
  
  };
  
  export const findLocationReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      // ************************ pending  *****************
  
      case FIND_LOCATION_Pending: {
        return {
          ...state,
          loading: true,
        };
      }
  
      // ************************ success *****************
      case FIND_LOCATION_SUCCESS: {
        const {response} = action.payload;
        return {
          ...state,
          data: response,
          loading: false,
        };
      }

      // ************************ error *****************

      case FIND_LOCATION_FAIL: {
        const {error} = action.payload;
        return {
          ...state,
          errors: error,
          loading: false,

        };
      }
  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
