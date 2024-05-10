import {ADD_BOOKING} from "../actions/bookings"

const initialState = {
  bookings: [],
}

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING: 
      return {  
          ...state, bookings: state.bookings.concat(action.booking)
      }  
    default:
      return state;
    }
}

export default bookingReducer