import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Announcements from "./views/Announcements";
import API from "./api/API";
import Register from "./views/Register";


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/register" exact render={props => <Register {...props} />}/>
            <Route path="/announcements" exact render={props => <Announcements {...props} />}/>

            {API.isRegistered() ? <Redirect to="/announcements" /> : <Redirect to="/register" />}
        </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
