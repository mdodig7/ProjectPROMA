export const ADD_USER = "ADD_USER";
export const GET_USER = "GET_USER";
export const LOGOUT = "LOGOUT";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user: user
  }
}

export const getUser = (user, userLogin) => {
  return {
    type: GET_USER,
    user: user,
    userLogin: userLogin
  }
}

export const logout = (user, userLogin) => {
  return {
    type: LOGOUT,
    user: user,
    userLogin: userLogin
  }
}