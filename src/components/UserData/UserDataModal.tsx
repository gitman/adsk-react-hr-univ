import * as React from 'react';

import { ActionTypes, IDispatch, IUserData } from '../../store/types';

import './UserData.css';

interface IUserProps extends IDispatch {
    userData: IUserData;
    showing: boolean;
}

class UserDataModal extends React.Component<IUserProps, {}> {
    constructor(props:IUserProps) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }
    
    public handleClose() {
        this.props.dispatch({
            type: ActionTypes.HIDE_MODAL
        })
    }

    public render() {
        const theClass = this.props.showing ? "user-data-wrapper" : "user-data-wrapper hidden"
        return (
            <div className={theClass}>
                <div className="user-data-container">
                    <pre>{JSON.stringify(this.props, null, 4)}</pre>
                    <button type="button" onClick={this.handleClose}>close</button>
                </div>
            </div>
        )
    }
}

export default UserDataModal;