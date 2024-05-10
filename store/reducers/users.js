import {USERS} from "../../data/Users"
import { ADD_USER, GET_USER, LOGOUT } from "../actions/users";

const initialState = {
  users: USERS,
  user: {},
  userLogin: false  
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: 
      return {  
          ...state, 
          users: state.users.concat(action.user)
      }   
    case GET_USER: 
      return {
        ...state, 
        user: action.user,
        userLogin: action.userLogin
      }
     case LOGOUT:
      return {
        ...state,
        user: {},
        userLogin: false
      };
    default:
      return state;
  }
}

export default userReducer