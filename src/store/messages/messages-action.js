const actions = {};

actions.get = payload => {
  return {
    type: 'GET',
    payload
  }
}

actions.post = payload => {
  return {
    type: 'POST',
    payload
  }
}

actions.put = id => {
  return {
    type: 'PUT',
    payload
  }
}

actions.delete = payload => {
  return {
    type: 'DELETE',
    payload
  }
}