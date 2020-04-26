import React from "react";
import './Announcements.scss'
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../api/API";
import {Redirect} from "react-router-dom";
import AnnouncementLoader from "../components/AnnouncementLoader";

export default class Announcements extends React.Component {

    public render() {

        if (!API.isRegistered()) {
            return <Redirect to="/"/>
        }

        return (
            <React.Fragment>
                <Header/>
                <Container>

                    <div className="content">
                        <div className="header">Announcements</div>

                        <AnnouncementLoader/>
                    </div>


                </Container>
            </React.Fragment>
        )
    }
}
