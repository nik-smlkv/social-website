const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: "Hi, how are you?", countOfLikes: 12 },
      { id: 2, message: "It's a beautiful day", countOfLikes: 9 },
      { id: 3, message: "My English is very bad", countOfLikes: 40 },
      { id: 4, message: "I go to the University everyday", countOfLikes: 22 },
   ],
   newPostText: '',
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: state.newPostText,
            countOfLikes: 0,
         }
         return { ...state, posts: [...state.posts, newPost], newPostText: '', };
      }
      case UPDATE_NEW_POST_TEXT: {
         return { ...state, newPostText: action.newText, };
      }
      default:
         return state;
   }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;