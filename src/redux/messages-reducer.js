const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 8,
                message: action.newMessageBody,
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default messageReducer;