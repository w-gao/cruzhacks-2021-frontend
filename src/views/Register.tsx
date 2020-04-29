import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import API from "../api/API";
import {Redirect} from "react-router-dom";
import {RegistrationForm} from "../components/RegistrationForm";

interface IProps {
}

interface IState {
    redirect: boolean
}

/**
 * Register View
 */
export default class Register extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    public render() {

        if (API.isRegistered() || this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (
            <React.Fragment>
                <Header/>
                <Container>
                    <h1>Register</h1>
                    <RegistrationForm/>
                </Container>
            </React.Fragment>
        )
    }
}
