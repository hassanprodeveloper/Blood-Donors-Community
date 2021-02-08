const SIGIN_USER_STATE = {
  isLoginToken: false,
  signInUser: {
    userName: 'Muhammad Akram',
    userNumber: '+923047955183',
    userAdress: 'Haveli Lakha, Okara',
    userBloodGroup: 'A+',
    userImageUri: 'https://lh3.googleusercontent.com/a-/AOh14Gi54nn3v3q90STJ1B4F2qDfsjHVvRQiXm4QUZNG7A=s88-c-k-c0x00ffffff-no-rj-mo',
  },
  usercampaign:{
    demoCampaign1:{
      id: 1,
      bloodGroup: 'A+',
      name: 'Muhammad Akram',
      number: '+923047955183',
      adress: 'Haveli Lakha, Okara',
    },    
    demoCampaign2:{
      id: 2,
      bloodGroup: 'A+',
      name: 'Muhammad Akram',
      number: '+923047955183',
      adress: 'Haveli Lakha, Okara',
    }, 
    demoCampaign3:{
      id: 3,
      bloodGroup: 'A+',
      name: 'Muhammad Akram',
      number: '+923047955183',
      adress: 'Haveli Lakha, Okara',
    },     
  }

};

export default (state = SIGIN_USER_STATE, action) => {
  console.log('src > redux > reducers > userData #12__ action.payload',action.payload )
  switch (action.type) {
    case 'SET_LOGEDIN_USER_INFO':
      return {
         ...state,
        signInUser : action.payload
      };
  }
  return state;
};
