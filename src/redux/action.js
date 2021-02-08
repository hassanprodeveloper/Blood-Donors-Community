// 👇 Login Screen Function (setting up user info in redux )
const setUserInfoInRedux = (data) =>{
    console.log('src > redux > action #3__ user data', data )
    return (dispatch) => {
        dispatch({type: "SET_LOGEDIN_USER_INFO", payload: data})
    }
    
}
// !--- //Login Screen Function (setting up user info in redux ) // !--- //
const updateUser1 = (data) =>{
    return (dispatch) => {
        dispatch({type: "SET_USER1", payload: data})
    }
}
// exporting functions from action file down here 👇
export {
    setUserInfoInRedux,
    updateUser1,
}