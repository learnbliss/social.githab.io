import React from 'react';
import styles from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
        }
    }

    render() {
        return (
            <div className={styles.root}>
                {this.state.editMode ?
                    <div>
                        <input autoFocus={true}
                               onBlur={this.toggleEditMode}
                               value={this.props.status}
                               onChange={this.changeStatus}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    </div>
                }
            </div>
        );
    }

    toggleEditMode = () => {
        this.setState((state) => {
            return {
                editMode: !this.state.editMode
            }
        })
    };

    changeStatus = () => {
        console.log('changeStatus!');
    }
}

export default ProfileStatus;