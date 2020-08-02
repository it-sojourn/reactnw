import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'Hey, how are you?', likes: 412},
        {id: 2, message: 'It\'s my third post', likes: 111},
        // {id: 3, message: 'my third post', likes: 11},
        // {id: 4, message: 'It\'s third post', likes: 21},
        // {id: 5, message: 'It\'s my post', likes: 34},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '',
                message: action.newPostText,
                likes: Math.ceil(Math.random() * 10),
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));

}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
// export const setUsersProfile = (userId) => ({
//     return (dispatch) => {
//     userId = this.props.match.params.userId;
//     if (!userId) {
//     userId = 9340;
// }
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//     .then(response => {
//         this.props.setUserProfile(response.data);
//     });
//
// })

export default profileReducer;