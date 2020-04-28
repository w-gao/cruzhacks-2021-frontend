import React from 'react';
import {IProps} from "../RegistrationForm";


export default function StepOne(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="firstName">First Name*</label>
                    {!validateForm('firstName', data.firstName) && <span>Invalid input (1-100 chars)</span>}
                    <input className="u-full-width" name="firstName" type="text" id="firstName"
                           defaultValue={data.firstName} ref={register}/>

                </div>
                <div className="six columns">
                    <label htmlFor="lastName">Last Name</label>
                    {!validateForm('lastName', data.lastName) && <span>Invalid input (1-100 chars)</span>}
                    <input className="u-full-width" name="lastName" type="text" id="lastName"
                           defaultValue={data.lastName} ref={register}/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <label htmlFor="age">Age</label>
                    {!validateForm('age', data.age) && <span>Invalid age</span>}
                    <input className="u-full-width" name="age" type="number" id="age"
                           defaultValue={data.age} ref={register}/>
                </div>
                <div className="six columns">
                    <label htmlFor="gender">Gender</label>
                    {!validateForm('gender', data.gender) && <span>Invalid gender</span>}

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"
                               defaultChecked={data.gender === "female"} ref={register} onChange={ev => {
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male"
                               defaultChecked={data.gender === "male"} ref={register} onChange={ev => {
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="trans">Trans</label>
                        <input type="radio" name="gender" id="trans" value="trans"
                               defaultChecked={data.gender === "trans"} ref={register} onChange={ev => {
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="non-binary">Non-binary</label>
                        <input type="radio" name="gender" id="non-binary" value="non-binary"
                               defaultChecked={data.gender === "non-binary"} ref={register} onChange={ev => {
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="other">Other</label>
                        <input type="radio" name="gender" id="other" value="other"
                               defaultChecked={data.gender === "other"} ref={register} onChange={ev => {
                            ev?.target.blur()
                        }}/>

                    </div>
                </div>

                {data.gender === "other" &&
                <div className="three columns">
                    <label htmlFor="gender-other">Other</label>
                    <input className="u-full-width" name="genderOther" type="text" id="gender-other"
                           defaultValue={data.genderOther} ref={register}/>
                </div>}

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
