import React from 'react';
import SideBar from "./SideBar";
import ContextStore from "../../../ContextStore";

const SideBarContainer = props => {
    return (
        <ContextStore.Consumer>
            {(store) => {
                return(
                    <SideBar dialogs={store.getState().messagesPage.dialogs}/>
                )
            }}
        </ContextStore.Consumer>
    );
};

export default SideBarContainer;