import { stopSubmit } from "redux-form";
import { authAPI } from "../API/api";
import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state;
  }

}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
  let promice = dispatch(getAuthUserData());
  Promise.all([promice])
    .then(() => {
      dispatch(initializedSuccess())
    });
}


export default appReducer;