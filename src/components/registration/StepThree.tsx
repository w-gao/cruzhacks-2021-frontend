import React from 'react';
import {IProps} from "../RegistrationForm";

export default function StepThree(props: IProps) {

    const data = props.data;


    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="transportation">Could you use help with transportation?</label>
                    {!data.transportation && <span>This field is required</span>}

                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="transportation" type="radio" id="yes" value="yes"
                               defaultChecked={data.transportation === "yes"} onChange={() => {
                        }}/>

                        <label htmlFor="no">No</label>
                        <input name="transportation" type="radio" id="no" value="no"
                               defaultChecked={data.transportation === "no"} onChange={() => {
                        }}/>

                    </div>

                </div>
            </div>

        </React.Fragment>
    )
}
