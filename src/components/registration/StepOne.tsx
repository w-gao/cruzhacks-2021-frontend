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
                    <label htmlFor="firstName">First Name *</label>
                    <input className={(!validateForm('firstName', data.firstName) ? "invalid " : "") + "u-full-width"}
                           name="firstName" type="text" id="firstName"
                           defaultValue={data.firstName} ref={register}/>

                </div>
                <div className="six columns">
                    <label htmlFor="lastName">Last Name *</label>
                    <input className={(!validateForm('lastName', data.lastName) ? "invalid " : "") + "u-full-width"}
                           name="lastName" type="text" id="lastName"
                           defaultValue={data.lastName} ref={register}/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <label htmlFor="age">Age *</label>
                    <input className={(!validateForm('age', data.age) ? "invalid " : "") + "u-full-width"} name="age"
                           type="number" id="age"
                           defaultValue={data.age} ref={register}/>
                </div>
                <div className="six columns">
                    <label htmlFor="gender" className={(!validateForm('gender', data.gender) ? "invalid-color " : "")}>Gender
                        *</label>

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="female" value="female"
                               defaultChecked={data.gender === "female"} ref={register} onClick={(ev) => {
                        }} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="male" value="male"
                               defaultChecked={data.gender === "male"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="trans">Trans</label>
                        <input type="radio" name="gender" id="trans" value="trans"
                               defaultChecked={data.gender === "trans"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="non-binary">Non-binary</label>
                        <input type="radio" name="gender" id="non-binary" value="non-binary"
                               defaultChecked={data.gender === "non-binary"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="other">Other</label>
                        <input type="radio" name="gender" id="other" value="other"
                               defaultChecked={data.gender === "other"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                    </div>
                </div>

                {data.gender === "other" &&
                <div className="three columns">
                    <label htmlFor="gender-other">Other *</label>
                    <input
                        className={(!validateForm('genderOther', data.genderOther) ? "invalid " : "") + "u-full-width"}
                        name="genderOther" type="text" id="gender-other"
                        defaultValue={data.genderOther} ref={register}/>
                </div>}

            </div>

            <div className="row">
                <div className="three columns">
                    <label htmlFor="yearOfGrad">Year of Graduation *</label>
                    <input className={(!validateForm('yearOfGrad', data.yearOfGrad) ? "invalid" : "")} name="yearOfGrad"
                           type="number" id="yearOfGrad"
                           defaultValue={data.yearOfGrad} ref={register}/>
                </div>
                <div className="three columns">
                    <label htmlFor="ucscStudent"
                           className={(!validateForm('ucscStudent', data.ucscStudent) ? "invalid-color " : "")}>UCSC
                        Student *</label>
                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="ucscStudent" type="radio" id="yes" value="yes"
                               defaultChecked={data.ucscStudent === "yes"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="no">No</label>
                        <input name="ucscStudent" type="radio" id="no" value="no"
                               defaultChecked={data.ucscStudent === "no"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                    </div>
                </div>

                {data.ucscStudent === "yes" && <div className="six columns">
                    <label htmlFor="collegeAffiliation">College Affiliation *</label>
                    <input className={(!validateForm('collegeAffiliation', data.collegeAffiliation) ? "invalid" : "")}
                           name="collegeAffiliation" type="text"
                           id="collegeAffiliation"
                           defaultValue={data.collegeAffiliation} ref={register}/>

                    {/*    options */}
                </div>}

            </div>

        </React.Fragment>
    )
}
