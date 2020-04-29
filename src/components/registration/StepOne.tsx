import React from 'react';
import {IProps, Input, RadioGroupInput, RadioInput} from "../RegistrationForm";


export default function StepOne(props: IProps) {

    const data = props.data;
    const validateForm = props.validateForm;
    const register = props.register;

    return (
        <React.Fragment>
            <div className="row">
                <div className="six columns">
                    <Input entry={"firstName"} text={"First Name *"} type={"text"} validateForm={validateForm}
                           value={data.firstName} register={register}/>
                </div>
                <div className="six columns">
                    <Input entry={"lastName"} text={"Last Name *"} type={"text"} validateForm={validateForm}
                           value={data.lastName}
                           register={register}/>
                </div>
            </div>

            <div className="row">
                <div className="three columns">
                    <Input entry={"age"} text={"Age *"} type={"number"} value={data.age} validateForm={validateForm}
                           register={register}/>
                </div>
                <div className="six columns">
                    <RadioGroupInput entry={"gender"} text={"Gender *"} value={data.gender} validateForm={validateForm}>
                        <RadioInput entry={"female"} text={"Female"} parent={"gender"} value={data.gender}
                                    register={register}/>
                        <RadioInput entry={"male"} text={"Male"} parent={"gender"} value={data.gender}
                                    register={register}/>
                        <RadioInput entry={"trans"} text={"Trans"} parent={"gender"} value={data.gender}
                                    register={register}/>
                        <RadioInput entry={"non-binary"} text={"Non-binary"} parent={"gender"} value={data.gender}
                                    register={register}/>
                        <RadioInput entry={"other"} text={"Other"} parent={"gender"} value={data.gender}
                                    register={register}/>
                    </RadioGroupInput>
                </div>

                {data.gender === "other" &&
                <div className="three columns">
                    <Input entry={"genderOther"} text={"Other *"} type={"text"} value={data.genderOther}
                           validateForm={validateForm} register={register}/>
                </div>}

            </div>

            <div className="row">
                <div className="three columns">
                    <Input entry={"yearOfGrad"} text={"Year of Graduation *"} type={"number"} value={data.yearOfGrad}
                           validateForm={validateForm} register={register}/>
                </div>
                <div className="three columns">
                    <RadioGroupInput entry={"ucscStudent"} text={"UCSC Student *"} value={data.ucscStudent}
                                     validateForm={validateForm}>
                        <RadioInput entry={"yes"} text={"Yes"} parent={"ucscStudent"} value={data.ucscStudent}
                                    register={register}/>
                        <RadioInput entry={"no"} text={"No"} parent={"ucscStudent"} value={data.ucscStudent}
                                    register={register}/>
                    </RadioGroupInput>
                </div>

                {data.ucscStudent === "yes" && <div className="six columns">
                    <Input entry={"collegeAffiliation"} text={"College Affiliation *"} type={"text"}
                           value={data.collegeAffiliation} validateForm={validateForm} register={register}/>
                    {/*    options */}
                </div>}
            </div>
        </React.Fragment>
    )
}
