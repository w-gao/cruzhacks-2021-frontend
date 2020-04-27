import React from "react";
import '../scss/views/Announcements.scss'
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../api/API";
import {Redirect} from "react-router-dom";
import AnnouncementLoader from "../components/AnnouncementLoader";

/**
 * Announcements View
 */
export default class Announcements extends React.Component {

    public render() {

        if (!API.isRegistered()) {
            return <Redirect to="/"/>
        }

        return (
            <React.Fragment>
                <Header/>
                <Container>

                    <h1>Announcements</h1>

                    <AnnouncementLoader/>


                </Container>
            </React.Fragment>
        )
    }
}
