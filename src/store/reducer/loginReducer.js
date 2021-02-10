import { LOGIN , LOADED} from "../actions/authAction";

const initialState = {
  user: {},
};

const loginReducer = (state = initialState, action) => {
  switch(action.type){
    case LOGIN: 
    return {
      ...state,
      user: action.payload
    }
    case LOADED:
      return {
        ...state,
        loading: true
    }
    default:
      return state
  }
}

export default loginReducer;