// import React from 'react';
import SideBar from "./SideBar";
import {connect} from "react-redux";

// const SideBarContainer = props => {
//     return (
//         <ContextStore.Consumer>
//             {(store) => {
//                 return(
//                     <SideBar dialogs={store.getState().messagesPage.dialogs}/>
//                 )
//             }}
//         </ContextStore.Consumer>
//     );
// };

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
    }
};

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;