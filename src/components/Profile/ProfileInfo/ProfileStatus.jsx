import React, {Component} from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        title: ''
    };

    activateEditMode() {
        this.setState({editMode: true})
    };

    deActivateEditMode() {
        this.setState({editMode: false})
    };

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)} > {this.props.status} </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onBlur={this.deActivateEditMode.bind(this)} autoFocus={true} value={this.props.status}/>
                </div>
                }
            </>
        );
    }
}

export default ProfileStatus;