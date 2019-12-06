import uuid from './uuid/v4';

const initialState = [{
  id: uuid(),
  text: 'Happy Friday', 
  createAt: new Date(),
  userID: uuid(),
}];


export default (state = initialState, action) => {
  //actions are objs that tell the reducer what to do. 
    // let { type, payload } = action;
    switch (action.type) {
      case "GET":
        return action.payload;
      case "POST":
        return [...state, action.payload]
      case "PUT":
        return ddddd;
      case "DELETE":
        return initialState;
      default:
        return state;
    }
  };
  