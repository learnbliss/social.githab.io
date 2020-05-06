import React from 'react';
import SideBar from "./SideBar";

const SideBarContainer = props => {
    const {dialogs} = props.store.getState().messagesPage;
    return (
        <SideBar dialogs={dialogs}/>
    );
};

export default SideBarContainer;