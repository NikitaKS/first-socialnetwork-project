import React, {useState, useEffect} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = () => {
        setEditMode(true)
    };

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    };

    let deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    // componentDidUpdate(prevProps, prevState, snapshot)
    // {
    //     // debugger
    //     if (prevProps.status !== this.props.status) { //то ппопадает в дебаг то нет . два раза подряд в дебаг
    //         this.setState({status: this.props.status});
    //     }
    // }

    return (
        <>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}> {props.status || '*****'} </span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onChangeStatus} onBlur={deActivateEditMode} autoFocus={true}
                       value={status}/>
            </div>
            }
        </>
    );
};

export default ProfileStatusWithHooks;