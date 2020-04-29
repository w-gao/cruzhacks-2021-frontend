import {useForm} from "react-hook-form";
import React, {useState} from "react";
import '../scss/components/RegistrationForm.scss'
import {HackerInfo} from "../api/data/HackerInfo";
import StepOne from "./registration/StepOne";
import StepTwo from "./registration/StepTwo";
import API from "../api/API";
import StepThree from "./registration/StepThree";

export interface IProps {
    data: any,
    register: any,
    validateForm: any
}

export interface InputProps {
    entry: string,
    text: string,
    type: string,
    value: any,
    validateForm: any,
    register: any
}

export interface RadioGroupInputProps {
    entry: string,
    text: string,
    value: any,
    validateForm: any,
    children: any
}

export interface RadioInputProps {
    entry: string,
    text: string,
    parent: string,
    value: any,
    register: any
}

export interface SelectInputProps {
    entry: string,
    text: string,
    value: any,
    validateForm: any,
    register: any
    children: any
}

export interface SelectInputOptionProps {
    entry: string,
    text: string
}

export const Input = (props: InputProps) => {
    return (
        <>
            <label htmlFor={props.entry}>{props.text}</label>
            <input className={(!props.validateForm(props.entry, props.value) ? "invalid " : "") + "u-full-width"}
                   name={props.entry} type={props.type} id={props.entry}
                   defaultValue={props.value} ref={props.register}/>
        </>
    )
}

export const RadioGroupInput = (props: RadioGroupInputProps) => {
    return (
        <>
            <label htmlFor={props.entry}
                   className={(!props.validateForm(props.entry, props.value) ? "invalid-color " : "")}>
                {props.text}</label>
            <div id="checkbox-input" className="u-full-width">

                {props.children}
            </div>
        </>
    )
}

export const RadioInput = (props: RadioInputProps) => {

    return (
        <>
            <label htmlFor={props.entry}>{props.text}</label>
            <input name={props.parent} type="radio" id={props.entry} value={props.entry}
                   defaultChecked={props.value === props.entry} ref={props.register} onChange={ev => {
                ev?.target.focus()
                ev?.target.blur()
            }}/>
        </>
    )
}

export const SelectInput = (props: SelectInputProps) => {
    return (
        <>
            <label htmlFor={props.entry}
                   className={(!props.validateForm(props.entry, props.value) ? "invalid-color " : "")}>
                {props.text}</label>
            <select name={props.entry} className="u-full-width"
                    defaultValue={props.value} ref={props.register}>
                {props.children}
            </select>
        </>
    )
}

export const SelectInputOption = (props: SelectInputOptionProps) => {
    return (
        <option value={props.entry}>{props.text}</option>
    )
}


export const RegistrationForm = () => {

    const {handleSubmit, register} = useForm({mode: "onBlur"});

    const [data, setData] = useState(HackerInfo);
    const [step, setStep] = useState(1);


    const onSave = (updated: any) => {
        setData(Object.assign(data, updated))
    };

    const onSubmit = (ev: any) => {

        if (validateForm()) {
            API.register(data);
            return;
        }

        console.log('Check for errors!')
        ev.preventDefault();
    }

    const validateForm = (): boolean => {
        let validation = true;

        let check = Object(data);

        let entries = ['firstName', 'lastName', 'age', 'gender',
            'ucscStudent', 'firstHackathon',
            'whyParticipate', 'transportation']

        for (let entry in entries) {
            if (!validateFormEntry(entries[entry], check[entries[entry]])) {
                validation = false;
            }
        }

        return validation;
    }

    const validateFormEntry = (entry: string, value: string | undefined = undefined): boolean => {

        if (value === undefined || value === "") {
            // not touched yet.
            return false;
        }

        switch (entry) {
            case 'firstName':
            case 'lastName':
                return value.length > 0 && value.length < 101;
            case 'age':
                return value.length > 0 && value.length < 4;
            case 'gender':
                return true;
            case 'genderOther':
                return value.length > 0 && value.length < 321
            case 'yearOfGrad':
                return value.length < 5;
            case 'ucscStudent':
                return true;
            case 'collegeAffiliation':
                return value.length > 0 && value.length < 20
            case 'firstHackathon':
                return true;
            case 'whyParticipate':
                return value.length > 0 && value.length < 501
            case 'transportation':
                return true;
            case 'accommodations':
                return value.length < 151
        }

        return true;
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    const nextStep = () => {
        if (step < 3) setStep(step + 1)
    }

    return (
        <React.Fragment>
            <h1>{step === 1 ? "Demographics" : step === 2 ? "Experiences" : "Logistics"}</h1>

            <form onBlur={handleSubmit(onSave)} onSubmit={onSubmit}>

                {step === 1 && <StepOne data={data} register={register} validateForm={validateFormEntry}/>}
                {step === 2 && <StepTwo data={data} register={register} validateForm={validateFormEntry}/>}
                {step === 3 && <StepThree data={data} register={register} validateForm={validateFormEntry}/>}


                {/* Form data are automatically saved */}
                {/*<div className="row">*/}
                {/*    <div className="six columns">*/}
                {/*        <span className="button" onClick={() => console.log('save')}>SAVE</span>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="row">

                    {step !== 1 && <div className="six columns">
                        <span className="button" onClick={prevStep}>PREV</span>
                    </div>
                    }

                    {step !== 3 && <div className={(step === 1 ? "twelve" : "six") + " columns"}>
                        <span className="button u-pull-right" onClick={nextStep}>NEXT</span>
                    </div>
                    }

                    {step === 3 && <div className="six columns">
                        <input type="submit" className="button button-primary u-pull-right" disabled={!validateForm()}/>
                    </div>}
                </div>

            </form>
        </React.Fragment>
    )
};
