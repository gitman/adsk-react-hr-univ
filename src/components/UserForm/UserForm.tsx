import * as React from 'react';

import './UserForm.css';


const UserForm = (props: {}) => (
  <div className="UserForm">
    <div className="UserForm__row">
      <label htmlFor="firstName" className="UserForm-label">First name</label>
      <input type="text" id="firstName" className="UserForm-input__text" />
    </div>
    <div className="UserForm__row">
      <label htmlFor="lastName" className="UserForm-label">Last name</label>
      <input type="text" id="lastName" className="UserForm-input__text" />
    </div>
    <div className="UserForm__row">
      <label htmlFor="email" className="UserForm-label">Email</label>
      <input type="email" id="email" className="UserForm-input__email" />
    </div>
    <div className="UserForm__row">
      <label htmlFor="userName" className="UserForm-label">User name</label>
      <input type="text" id="userName" className="UserForm-input__text" />
    </div>
    <div className="UserForm__row">
      <label htmlFor="password" className="UserForm-label">Password</label>
      <input type="password" id="password" className="UserForm-input__password" />
    </div>
    <div className="UserForm__row UserForm__row-actions">
      <button className="UserForm-action">Sign Up</button>
    </div>
  </div>
);

export default UserForm;
