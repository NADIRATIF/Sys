import actions from '../Users/actions';

const initialState = {
  loader: false,
  email: null,
  name: null,
  validateUserLoader: true,
  logOutLoader: false,
  data:null,
}

function Reducer(state = initialState, action) {
  switch (action.type) {
      case actions.GET_ALL_USER:
      console.log("user",action)
      return {...state, validateUserLoader: true}
    case actions.GET_ALL_USER_SUCCESS:
        console.log("sucess",action)
      return {
        ...state,
        validateUserLoader: false,
        data: action.payload,
      }
    case actions.GET_ALL_USER_FAILURE:
      return {
        ...state,
        validateUserLoader: false,
        data: null,
      }
    default:
      return state
  }
}

export default Reducer;
