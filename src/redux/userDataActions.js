const setUserInfo01 = (data) =>{
    return (dispatch) => {
        dispatch({type: "SIGNIN_USERINFO_01", payload: data})
    }
}


export {
    setUserInfo01,
}