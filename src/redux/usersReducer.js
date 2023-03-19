const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
   users: [
      { id: 1, followed: true, status: 'Im a very rich', location: { country: 'Belarus', city: 'Minsk' } },
      { id: 2, followed: true, status: 'Im a rich', location: { country: 'Russia', city: 'Moscow' } },
      { id: 3, followed: false, status: 'Im a big boss', location: { country: 'Ukraine', city: 'Kiev' } },
      { id: 4, followed: false, status: 'Im friendly', location: { country: 'Germany', city: 'Berlin' } },
   ],
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: users.map((user) => {
               if (user.id === userId.id) {
                  return ({ ...user, followed: true });
               }
               return user;
            }),
         };
      }
      case UNFOLLOW: {
         return {
            ...state,
            users: users.map((user) => {
               if (user.id === userId.id) {
                  return ({ ...user, followed: false });
               }
               return user;
            }),
         };
      }
      case SET_USERS: {
         return { ...state, users: [...state.users, ...action.users] };
      }
      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;