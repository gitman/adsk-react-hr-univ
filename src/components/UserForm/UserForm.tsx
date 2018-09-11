import * as React from 'react';

import './UserForm.css';

import { ActionTypes, IDispatch, IUserData } from '../../store/types';

class UserForm extends React.PureComponent<IDispatch, IUserData> {
  constructor(props:IDispatch) {
    super(props);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      username: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(e:React.ChangeEvent) {
    const stateUpdate = {};
    const target = e.target as any;
    stateUpdate[target.name] = target.value;
    this.setState(stateUpdate);
  }

  public handleSubmit(e:React.SyntheticEvent) {
    e.preventDefault();

    this.props.dispatch({
      payload: this.state,
      type: ActionTypes.SET_USER_DATA
    });
    this.props.dispatch({
      payload: false,
      type: ActionTypes.TOGGLE_LOGIN_FORM
    });
    this.props.dispatch({
      payload: true,
      type: ActionTypes.SHOW_USER_DATA
    });
    // alert(JSON.stringify(this.state, null, 4));
  }

  public render () {
    return (
      <form className="UserForm" onSubmit={this.handleSubmit}>
        <div className="UserForm__row">
          <label htmlFor="firstname" className="UserForm-label">First name</label>
          <input type="text" 
                 name="firstname"
                 id="firstName"
                 className="UserForm-input__text"
                 value={this.state.firstname}
                 onChange={this.handleChange}
                 />
        </div>
        <div className="UserForm__row">
          <label htmlFor="lastname" className="UserForm-label">Last name</label>
          <input type="text"
                 name="lastname"
                 id="lastName"
                 className="UserForm-input__text"
                 value={this.state.lastname}
                 onChange={this.handleChange}
                 />
        </div>
        <div className="UserForm__row">
          <label htmlFor="email" className="UserForm-label">Email</label>
          <input type="email"
                 name="email"
                 id="email"
                 className="UserForm-input__email"
                 value={this.state.email}
                 onChange={this.handleChange}
          />
        </div>
        <div className="UserForm__row">
          <label htmlFor="username" className="UserForm-label">User name</label>
          <input type="text"
                 name="username"
                 id="userName"
                 className="UserForm-input__text"
                 value={this.state.username}
                 onChange={this.handleChange}
          />
        </div>
        <div className="UserForm__row">
          <label htmlFor="password" className="UserForm-label">Password</label>
          <input type="password"
                 name="password"
                 id="password"
                 className="UserForm-input__password"
                 value={this.state.password}
                 onChange={this.handleChange}
          />
        </div>
        <div className="UserForm__row UserForm__row-actions">
          <button className="UserForm-action">Sign Up</button>
        </div>
      </form>
    )
  }
}

export default UserForm;
