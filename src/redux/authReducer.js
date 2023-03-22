const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';


let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   isFetching: false,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         };
      }
      case TOGGLE_FETCHING: {
         return { ...state, isFetching: action.isFetching };
      }
      default:
         return state;
   }
}

export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export default authReducer;