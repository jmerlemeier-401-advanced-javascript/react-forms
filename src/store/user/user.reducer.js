let initialState = { username: 'Seymore Butts', userID: 987654321 };

//================== REDUCER ======================
//listens for 
export default (state = initialState, action) => {
//actions are objs that tell the reducer what to do. 
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      return { username: payload }
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
