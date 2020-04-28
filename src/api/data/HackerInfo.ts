
export interface Inputs {
    firstName: string,
    lastName: string,
    age: undefined | number,
    gender: string,
    yearOfGraduation: string,
    ucscStudent: boolean,
    collegeAffiliation: string,

    firstHackathon: string,
    whyParticipate: string,

    transportation: string,
    accommodations: string,
}

export const Inputs: Inputs = {
    firstName: '',
    lastName: '',
    age: undefined,
    gender: '',
    yearOfGraduation: '',
    ucscStudent: false,
    collegeAffiliation: '',

    firstHackathon: '',
    whyParticipate: '',

    transportation: '',
    accommodations: '',
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
