import React from "react";
import {IProps} from "../RegistrationForm";

export default function StepTwo(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">

                    <label htmlFor="firstHackathon"
                           className={(!validateForm('firstHackathon', data.firstHackathon) ? "invalid-color " : "")}>
                        First Hackathon? *
                    </label>
                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="firstHackathon" type="radio" id="yes" value="yes"
                               defaultChecked={data.firstHackathon === "yes"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="no">No</label>
                        <input name="firstHackathon" type="radio" id="no" value="no"
                               defaultChecked={data.firstHackathon === "no"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>
                    </div>
                </div>
                <div className="twelve columns">
                    <label htmlFor="whyParticipate">Why do you want to participate? (500 chars) *</label>
                    <textarea
                        className={(!validateForm('whyParticipate', data.whyParticipate) ? "invalid " : "") + "u-full-width"}
                        name="whyParticipate" id="whyParticipate" rows={10}
                        defaultValue={data.whyParticipate} ref={register}/>
                </div>
            </div>

        </React.Fragment>
    );
}
