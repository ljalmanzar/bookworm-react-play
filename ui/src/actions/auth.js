import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = (user) => ({
   type: USER_LOGGED_IN,
   user
})

/* thunk action is just a function which returns another function
   api.user.login(credentials) is an api request created by me
   then(user => dispatch(userLoggedIn(user)) gets the request and calls redux action to update
*/
export const login = (credentials) => (dispatch) => 
   api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));