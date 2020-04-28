import {useForm} from "react-hook-form";
import React, {useState} from "react";
import '../scss/components/RegistrationForm.scss'
import {Inputs} from "../api/data/HackerInfo";
import StepOne from "./registration/StepOne";
import StepTwo from "./registration/StepTwo";
import API from "../api/API";
import StepThree from "./registration/StepThree";

export interface IProps {
    data: any,
    register: any,
    validateForm: any
}

export const RegistrationForm = () => {

    const {handleSubmit, register} = useForm({mode: "onBlur"});

    const [data, setData] = useState(Inputs);
    const [step, setStep] = useState(1);

    const onSave = (entry: any) => {
        setData(Object.assign(data, entry))
    };

    const onSubmit = (ev: any) => {

        const validation = validateForm();

        if (validation) {
            API.register(data);

            ev.preventDefault();
        }
    }

    const validateForm = (entry: string | undefined = undefined, value: string | undefined = undefined): boolean => {

        if (entry === undefined) {
            // submit validation


            return false;
        } else if (value === undefined) {
            // not touched yet.
            return true;
        }

        switch (entry) {
            case 'firstName':
            case 'lastName':
                return value.length > 0 && value.length < 100;
            case 'age':
                return value.length > 0 && value.length < 4;
            case 'gender':
                return value !== undefined;

        }

        return false;
    }

    const prevStep = () => {
        if (step > 1) setStep(step - 1)
    }

    const nextStep = () => {
        if (step < 3) setStep(step + 1)
    }

    console.log(data)

    return (
        <form onBlur={handleSubmit(onSave)} onSubmit={onSubmit}>

            {step === 1 && <StepOne data={data} register={register} validateForm={validateForm}/>}
            {step === 2 && <StepTwo data={data} register={register} validateForm={validateForm}/>}
            {step === 3 && <StepThree data={data} register={register} validateForm={validateForm}/>}


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
                    <input type="submit" className="button button-primary u-pull-right"
                       onClick={() => {}}/>
                </div>}
            </div>

        </form>
    )
};
