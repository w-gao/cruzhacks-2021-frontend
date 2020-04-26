import React from 'react';
import './Header.scss'
import API from "../api/API";

export default class Header extends React.Component {

    public render() {

        return (

            <header className="justify-content-between">
                <div className="logo"/>
                <div className="info">Dashboard</div>

                {API.isRegistered() &&
                <div className="align-right">
                    <a href="/" className="button" onClick={API.logout}>
                        <div>Logout</div>
                    </a>
                </div>
                }
            </header>
        )
    }

}
