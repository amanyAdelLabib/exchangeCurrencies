import {
    GET_Coords
  } from '../Actions/types';
  
  const initialState = {
    data: {},
  
  
  };
  
  export const getCoordsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
  
      case GET_Coords: {
        const {data} = action.payload;
        return {
          ...state,
          data: data,
        };
      }

  
      // ************************ default  *****************
  
      default:
        return state;
    }
  };
