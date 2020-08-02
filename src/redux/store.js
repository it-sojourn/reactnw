import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hey, how are you?', likes: 412},
                {id: 2, message: 'It\'s my third post', likes: 111},
                // {id: 3, message: 'my third post', likes: 11},
                // {id: 4, message: 'It\'s third post', likes: 21},
                // {id: 5, message: 'It\'s my post', likes: 34},
            ],
            newPostText: 'test',

        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hey'},
                {id: 2, message: 'Dude'},
                {id: 3, message: 'How is ur skill?'},
                {id: 4, message: 'It is cool'},
                {id: 5, message: 'Keep calm'},
                {id: 6, message: 'Going on'},
                {id: 7, message: 'Cya'},
            ],
            dialogs: [
                {id: 1, name: 'Diman'},
                {id: 2, name: 'Alina'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Nikitos'},
                {id: 5, name: 'Syoma'},
                {id: 6, name: 'Pashok'},
                {id: 7, name: 'Vlad'},
            ],
            newMessageBody: 'testMessage',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Diman',},
                {id: 2, name: 'Misha',},
                {id: 3, name: 'Andrey',},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 6,
        //         message: this._state.profilePage.newPostText,
        //         likes: 0,
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let newMessage = {
        //         id: 8,
        //         message: this._state.messagePage.newMessageBody,
        //     };
        //     this._state.messagePage.messages.push(newMessage);
        //     this._state.messagePage.newMessageBody = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.messagePage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // }
    },
}

export default store;
window.store = store;
