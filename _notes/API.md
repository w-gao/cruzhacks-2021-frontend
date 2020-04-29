# API

Below are the methods available for the `API.ts` class.

Note that only `getAnnouncements()` retrieves information from an actual backend server
 while other methods are placeholders for the actual API client. 

## isRegistered(): boolean
Returns whether the user registered or not. 

## register(payload: string): boolean
payload: a json string that contains registration information. \
Returns the registration status. 

## logout(): void
Logs out the current user.

## getAnnouncements(): []
Returns a list of announcements the current user has. 


# DB Schema

## HackerInfo

```
Demographics
    First & Last Name,
    Age,
    Gender,
    Gender_Other,
    Year of Graduation: optional,
    UCSC student,
    College Affiliation

Experiences
    First Hackathon?
    Why do you want	to participate?

Logistics
    Could you use help with transportation?
    Do you require any special accommodations?: optional. 
```