import React from 'react';
import '../scss/components/Header.scss'
import API from "../api/API";

export default class Header extends React.Component {

    public render() {

        return (

            <header>

                <div className="brand">
                    {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                    <a className="logo" href="/"/>
                    <div className="page">Dashboard</div>
                </div>

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
