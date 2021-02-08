import {combineReducers} from 'redux';
import userdata from './userData';
import donorsdetails from './donorsDetails';
// import userData from './userData';
// import other reducers here

export default combineReducers({
  userData: userdata,
  donorDetails: donorsdetails,
  // other reducers will come here
});
