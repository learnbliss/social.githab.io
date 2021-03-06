// import React from 'react';
import Dialogs from './Dialogs';
import {addMessageAC} from '../../reducers/messagesReducer';
import {connect} from 'react-redux';

// const DialogsContainer = props => {
//     return (
//         <ContextStore.Consumer>
//             {(store) => {
//                 const pushDataToStateDialog = (text) => {
//                     store.dispatch(pushDataToStateDialogAC(text))
//                 };
//                 const addMessage = () => {
//                     store.dispatch(addMessageAC())
//                 };
//                 return (
//                     <Dialogs pushDataToStateDialog={pushDataToStateDialog}
//                              addMessage={addMessage}
//                              dialogs={store.getState().messagesPage.dialogs}
//                              messages={store.getState().messagesPage.messages}
//                              textArea={store.getState().messagesPage.textArea}
//                     />
//                 )
//             }}
//         </ContextStore.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        textArea: state.messagesPage.textArea,
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageAC(message))
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapStateToDispatch)(Dialogs);

export default DialogsContainer;