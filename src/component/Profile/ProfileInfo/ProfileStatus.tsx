import React, {ChangeEvent} from 'react';
import {setUserStatusThunk} from '../../../Redux/profile-reducer';


class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }
    changeEditModeonBlur = () => {
        this.setState({
            editMode: false,
        })

            this.props.dispatch(setUserStatusThunk(this.state.status))

    }
    changeEditModeOnDoubleClick = () => {
        this.setState({
            editMode: true
        })
    }


    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        console.log(this.state.status)
        return <div>
            {this.state.editMode
                ?
                <input value={this.state.status}
                       autoFocus
                       onBlur={this.changeEditModeonBlur}
                       onChange={this.onChangeStatus}
                />
                :
                <span onDoubleClick={this.changeEditModeOnDoubleClick}>{this.props.status || 'My Status'}</span>
            }

        </div>
    }
}

export default ProfileStatus