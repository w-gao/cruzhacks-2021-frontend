import React from 'react';
import '../scss/components/Header.scss'
import API from "../api/API";

interface IProps {
    header?: string
}

export function Header(props: IProps) {
    return (
        <header>

            <div className="brand">
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a className="logo" href="/"/>
                <div className="page">{props.header || "Dashboard"}</div>
            </div>

            {API.isRegistered() &&
            <div className="align-right">
                <a href="/" className="logout" onClick={API.logout}>
                    <div>Logout</div>
                </a>
            </div>
            }

        </header>
    )
}
