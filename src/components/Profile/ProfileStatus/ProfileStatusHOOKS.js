import React, {useEffect, useState} from 'react';
import styles from './ProfileStatus.module.scss'

const ProfileStatusHOOKS = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    };

    const changeStatus = (e) => {
        setStatus(e.target.value)
    };

    return (
        <div className={styles.root}>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       value={status}
                       onChange={changeStatus}/>
            </div>
            }
        </div>
    );
};

export default ProfileStatusHOOKS;