import React from "react";
import {IProps, RadioGroupInput, RadioInput} from "../RegistrationForm";

export default function StepTwo(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <RadioGroupInput entry={"firstHackathon"} text={"First Hackathon? *"}
                                     value={data.firstHackathon} validateForm={validateForm}>
                        <RadioInput entry={"yes"} text={"Yes"} parent={"firstHackathon"} value={data.firstHackathon}
                                    register={register}/>
                        <RadioInput entry={"no"} text={"No"} parent={"firstHackathon"} value={data.firstHackathon}
                                    register={register}/>
                    </RadioGroupInput>
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
