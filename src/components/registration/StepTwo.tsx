import React from "react";
import {IProps} from "../RegistrationForm";

export default function StepTwo(props: IProps) {

    const data = props.data;


    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="transportation">First Hackathon?</label>
                    {!data.firstHackathon && <span>This field is required</span>}

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="firstHackathon" type="radio" id="yes" value="yes"
                               defaultChecked={data.firstHackathon === "yes"}/>

                        <label htmlFor="no">No</label>
                        <input name="firstHackathon" type="radio" id="no" value="no"
                               defaultChecked={data.firstHackathon === "no"}/>

                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}
