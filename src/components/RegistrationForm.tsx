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
    errors: any,
    register: any,
}

export const RegistrationForm = () => {

    const {register, errors, handleSubmit} = useForm({mode: "onBlur"});

    const [data, setData] = useState(Inputs);
    const [step, setStep] = useState(1);

    const onSave = (entry: any) => {
        setData(Object.assign(data, entry))
    };

    const onSubmit = (ev: any) => {

        API.register(data)

        // ev.preventDefault();
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

            {step === 1 && <StepOne data={data} errors={errors} register={register}/>}
            {step === 2 && <StepTwo data={data} errors={errors} register={register}/>}
            {step === 3 && <StepThree data={data} errors={errors} register={register}/>}


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
