const actions = {};

//Action Creator for login
actions.login = payload => {
  return {
    type: "LOGIN",
    payload,
  }
}

//Action Creator for logout
actions.logout = payload => {
  return {
    type: "LOGOUT",
  }
}


export default {actions};