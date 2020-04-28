import React from "react";
import {IProps} from "../RegistrationForm";

export default function StepTwo(props: IProps) {

    const data = props.data;
    const errors = props.errors;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="transportation">First Hackathon?</label>
                    {errors.firstHackathon && <span>This field is required</span>}

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="firstHackathon" type="radio" id="yes" value="yes"
                               defaultChecked={data.firstHackathon === "yes"} ref={register({required: true})}/>

                        <label htmlFor="no">No</label>
                        <input name="firstHackathon" type="radio" id="no" value="no"
                               defaultChecked={data.firstHackathon === "no"} ref={register({required: true})}/>

                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}
