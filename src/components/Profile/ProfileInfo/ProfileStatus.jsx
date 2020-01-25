import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    onChangeStatus = (e) => {
        this.setState({status: e.currentTarget.value})
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deActivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status});
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> {this.props.status || '*****'} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onChangeStatus} onBlur={this.deActivateEditMode} autoFocus={true}
                           value={this.state.status}/>
                </div>
                }
            </>
        );
    }
}

export default ProfileStatus;