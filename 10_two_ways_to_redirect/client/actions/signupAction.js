import axios from 'axios';
// This function takes the user data and then to use thunk middleware instead of
// object we return function so we can write any functionality we want. This
// function take dispatch which we can use inside of this function to this page
// and other action but in this function we will return promise of axios making
// post request
export function userSignupRequest(userData) {
    return axios.post('/api/users', userData);
}