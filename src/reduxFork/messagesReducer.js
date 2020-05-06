const PUSH_DATA_TO_STATE_DIALOG = 'PUSH_DATA_TO_STATE_DIALOG';
const ADD_MESSAGE_DIALOG = 'ADD_MESSAGE_DIALOG';

let initialState = {
    messages: [
        {id: 1, message: 'Привет как дела'},
        {id: 2, message: 'У меня нормич'},
        {id: 3, message: 'А у тебя?'},
        {id: 4, message: 'все по феншую'},
    ],
    dialogs: [
        {
            id: '1',
            name: 'Andre',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCMHxa7MfSl3vH9hQDDgUwFpORGANIRLpP2t8Pax3IqljrYHZ&usqp=CAU'
        },
        {
            id: '2',
            name: 'Dimka',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtYsA5m3xp8EdW0R1vT5Oein32vpgXbFZ6NkB23lbuDxjZwedh&usqp=CAU'
        },
        {id: '3', name: 'Nikolay', avatar: 'https://i.ytimg.com/vi/WJMp9NtK4io/hqdefault.jpg'},
        {
            id: '4',
            name: 'Arseniy',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShIt3l2-355Sf6La3bZUy7lvRj6vDzjhWQfW1uNHWYxwRNcwzY&usqp=CAU'
        },
    ],
    textArea: '',
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE_DIALOG:
            state.messages.push({id: state.messages.length + 1, message: state.textArea,});
            state.textArea = '';
            return state;
        case PUSH_DATA_TO_STATE_DIALOG:
            state.textArea = action.payload.textAreaValue;
            return state;
        default:
            return state
    }
};

export const pushDataToStateDialogAC = (text) => {
    return {
        type: PUSH_DATA_TO_STATE_DIALOG,
        payload: {
            textAreaValue: text,
        },
    }
};

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE_DIALOG,
    }
};

export default messagesReducer;