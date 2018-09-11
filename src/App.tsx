import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserData from './components/UserData/UserData';
import UserForm from './components/UserForm/UserForm';
import { dispatch, store } from './store/store';
import { IAppState } from './store/types';
// import { showLoginForm } from './store/reducers';

// import UserForm from './components/UserForm/UserForm'

class App extends React.Component<{}, IAppState> {
  public readonly state: IAppState;
  private unsubscribe: () => void;

  constructor(props:{}) {
    super(props);

    this.state = store.getState();
  }

  public componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    const containerProps = {
      ...this.state,
      dispatch
    }
    
    const loginForm = this.state.showLoginForm ? <UserForm dispatch={dispatch} /> : "";
    const showUserData = this.state.showUserData ? <UserData userData={this.state.userData} dispatch={dispatch} /> : "";

    return (
      <div className="App">
        <Header {...containerProps} />
        <main className="App-main">
          <h1>Welcome to the best way to find a school!</h1>
          {loginForm}
          {showUserData}
        </main>
      </div>
    );
  }
}

export default App;
