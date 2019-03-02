
const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'fetch_users':
    return action.payload;

  default:
    return state
  }
};