import React from 'react';
import '../scss/components/RegistrationForm.scss'
import API from "../api/API";

export default class RegistrationForm extends React.Component {


    public render() {

        return (
            <React.Fragment>
                <form>
                    <div className="row">
                        <div className="six columns">
                            <label htmlFor="firstName">First Name</label>
                            <input className="u-full-width" type="text" id="firstName"/>
                        </div>
                        <div className="six columns">
                            <label htmlFor="lastName">Last Name</label>
                            <input className="u-full-width" type="text" id="lastName"/>
                        </div>
                    </div>
                    <div className="row">

                        <div className="six columns">
                            <span className="button" onClick={() => console.log('save')}>SAVE</span>
                        </div>
                    </div>

                    <div className="row">

                        <div className="six columns">
                            <span className="button" onClick={() => console.log('prev')}>PREV</span>
                        </div>
                        <div className="six columns">
                            <a href="/" className="button button-primary u-pull-right"
                               onClick={() => API.register([])}>SUBMIT</a>
                        </div>
                    </div>

                </form>
            </React.Fragment>
        )
    }
}
