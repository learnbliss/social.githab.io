import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedAppThunk} from "./reducers/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import App from "./App";

class AppContainer extends React.Component {

    componentDidMount(): void {
        this.props.initializedAppThunk();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <App/>
        );
    }
}

export default compose(
    connect((state) => {
        return {
            initialized: state.app.initialized,
        }
    }, {
        initializedAppThunk,
    }),
)(AppContainer);