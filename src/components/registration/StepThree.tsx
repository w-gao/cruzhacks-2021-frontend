import React from 'react';
import {IProps, RadioGroupInput, RadioInput} from "../RegistrationForm";

export default function StepThree(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <RadioGroupInput entry={"transportation"} text={"Could you use help with transportation? *"}
                                     value={data.transportation} validateForm={validateForm}>
                        <RadioInput entry={"yes"} text={"Yes"} parent={"transportation"} value={data.transportation}
                                    register={register}/>
                        <RadioInput entry={"no"} text={"No"} parent={"transportation"} value={data.transportation}
                                    register={register}/>
                    </RadioGroupInput>
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
