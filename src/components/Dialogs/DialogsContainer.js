import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC, pushDataToStateDialogAC} from "../../reduxFork/messagesReducer";

const DialogsContainer = props => {
    const {store} = props;
    const pushDataToStateDialog = (text) => {
        store.dispatch(pushDataToStateDialogAC(text))
    };
    const addMessage = () => {
        store.dispatch(addMessageAC())
    };
    return (
        <Dialogs pushDataToStateDialog={pushDataToStateDialog}
                 addMessage={addMessage}
                 dialogs={store.getState().messagesPage.dialogs}
                 messages={store.getState().messagesPage.messages}
                 textArea={store.getState().messagesPage.textArea}
        />
    );
};

export default DialogsContainer;