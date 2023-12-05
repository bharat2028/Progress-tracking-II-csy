import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Useeffect';
import App1 from './App1';
import reportWebVitals from './reportWebVitals';
import Hooks from './Hooks';
import Lifecycle from './Lifecyle';
import Timer from './Timer';
import TimerApp from './Timeinterval';
import Array from './Array'
import './App.css';
import Hoc from './Hoc';
import Useeffect from './Useeffect';
import SignInSide from './SignInside';
import SignUp from './Signuppage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Hooks/>
  <Lifecycle/>
  <Timer/>
  <TimerApp/>
  <Array/>
  <Hoc/>
  <Useeffect/>
  <SignInSide/>
  <SignUp/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
