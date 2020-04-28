import React from 'react';
import {IProps} from "../RegistrationForm";

export default function StepThree(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">

                    <label htmlFor="transportation"
                           className={(!validateForm('transportation', data.transportation) ? "invalid-color " : "")}>
                        Could you use help with transportation? *
                    </label>
                    <div id="checkbox-input" className="u-full-width">

                        <label htmlFor="yes">Yes</label>
                        <input name="transportation" type="radio" id="yes" value="yes"
                               defaultChecked={data.transportation === "yes"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                        <label htmlFor="no">No</label>
                        <input name="transportation" type="radio" id="no" value="no"
                               defaultChecked={data.transportation === "no"} ref={register} onChange={ev => {
                            ev?.target.focus()
                            ev?.target.blur()
                        }}/>

                    </div>
                </div>

                <div className="twelve columns">
                    <label htmlFor="accommodations">Do you require any special accommodations?</label>
                    <textarea
                        className={"u-full-width"}
                        name="accommodations" id="accommodations" rows={3}
                        defaultValue={data.accommodations} ref={register}/>
                </div>
            </div>

        </React.Fragment>
    )
}
