
export interface Inputs {
    firstName: string | undefined,
    lastName: string | undefined,
    age: number | undefined,
    gender: string | undefined,
    genderOther: string | undefined,
    yearOfGraduation: string | undefined,
    ucscStudent: boolean | undefined,
    collegeAffiliation: string | undefined,

    firstHackathon: string | undefined,
    whyParticipate: string | undefined,

    transportation: string | undefined,
    accommodations: string | undefined,
}

export const Inputs: Inputs = {
    firstName: undefined,
    lastName: undefined,
    age: undefined,
    gender: undefined,
    genderOther: undefined,
    yearOfGraduation: undefined,
    ucscStudent: undefined,
    collegeAffiliation: undefined,

    firstHackathon: undefined,
    whyParticipate: undefined,

    transportation: undefined,
    accommodations: undefined,

}


export const DemographicInfo = {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    yearOfGraduation: '',
    ucscStudent: false,
    collegeAffiliation: ''
};

export const ExperiencesInfo = {
    firstHackathon: false,
    whyParticipate: ''
}

export const LogisticsInfo = {
    transportation: '',
    accommodations: ''
}
