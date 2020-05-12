import React from 'react';
import styles from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status,
        };
    }

    render() {
        return (
            <div className={styles.root}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status}
                               onChange={this.changeStatus}/>
                    </div>
                }
            </div>
        );
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMode = () => {
        this.setState((state) => {
            return {
                editMode: true
            }
        })
    };

    deactivateEditMode = () => {
        this.setState((state) => {
            return {
                editMode: false
            }
        });
        this.props.updateStatusThunk(this.state.status)
    };

    changeStatus = (e) => {
        this.setState({
            status: e.target.value,
        });
    }
}

export default ProfileStatus;