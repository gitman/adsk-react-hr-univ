import * as React from 'react';

import { IDispatch, IUserData } from '../../store/types';

import './UserData.css';

interface IUserProps extends IDispatch {
    userData: IUserData
}

class UserData extends React.Component<IUserProps, {}> {
    constructor() {
        this.handleClose = this.handleClose.bind(this);
    }
    
    public this.handleClose() {

    }

    public render() {
        return (
            <div className="user-data-wrapper">
                <div className="user-data-container">
                    <pre>{JSON.stringify(this.props, null, 4)}</pre>
                    <button type="button" onClick={this.handleClose}>close</button>
                </div>
            </div>
        )
    }
}

export default UserData;