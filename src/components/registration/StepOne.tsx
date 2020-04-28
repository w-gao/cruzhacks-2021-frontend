import React from 'react';
import {IProps} from "../RegistrationForm";


export default function StepOne(props: IProps) {

    const data = props.data;
    const errors = props.errors;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="firstName">First Name*</label>
                    {errors.firstName && <span>This field is required</span>}
                    <input className="u-full-width" name="firstName" type="text" id="firstName"
                           defaultValue={data.firstName} required={true} ref={register({required: true})}/>

                </div>
                <div className="six columns">
                    <label htmlFor="lastName">Last Name</label>
                    {errors.lastName && <span>This field is required</span>}
                    <input className="u-full-width" name="lastName" type="text" id="lastName"
                           defaultValue={data.firstName} required={true} ref={register({required: true})}/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <label htmlFor="age">Age</label>
                    <input className="u-full-width" type="text" id="age"/>
                </div>
                <div className="six columns">
                    <label htmlFor="gender">Gender</label>

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"/>

                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male"/>

                        <label htmlFor="trans">Trans</label>
                        <input type="radio" name="gender" id="trans" value="trans"/>

                        <label htmlFor="non-binary">Non-binary</label>
                        <input type="radio" name="gender" id="non-binary" value="non-binary"/>

                    </div>
                </div>

                <div className="three columns">
                    <label htmlFor="lastName">Other</label>
                    <input className="u-full-width" type="text" id="lastName"/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <label htmlFor="yearOfGrad">Year of Graduation</label>
                    <input className="u-full-width" type="text" id="yearOfGrad"/>
                </div>
                <div className="three columns">
                    <label htmlFor="ucscStudent">UCSC Student</label>

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input type="radio" name="ucscStudent" id="yes" value="yes"/>

                        <label htmlFor="no">No</label>
                        <input type="radio" name="ucscStudent" id="no" value="no"/>

                    </div>
                </div>

                {/* Conditional ! */}
                <div className="six columns">
                    <label htmlFor="college">College Affiliation</label>
                    <input className="u-full-width" type="text" id="college"/>
                </div>
            </div>

        </React.Fragment>
    )
}
