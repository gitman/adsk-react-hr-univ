import * as React from 'react';
import { ActionTypes, IDispatch } from '../../store/types';

class Header extends React.PureComponent<IDispatch, {}> {
    constructor(props:IDispatch) {
        super(props);

        this.loginClickCallback = this.loginClickCallback.bind(this);
    }

    public loginClickCallback() {
        //
        this.props.dispatch({
            type: ActionTypes.TOGGLE_LOGIN_FORM
        })
    }

    public render() {
        return (
            <header className="App-header">
                <h1 className="App-title">YOUniversity</h1>

                <i onClick={this.loginClickCallback}>sign-up/sign-in</i>
            </header>
        )
    }
}

export default Header;