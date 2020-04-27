import React from 'react';
import '../scss/components/RegistrationForm.scss'

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


                </form>
            </React.Fragment>
        )
    }
}
