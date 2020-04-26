
/**
 *
 */
class API {

    /**
     *
     */
    private static API_ENDPOINT = 'https://us-central1-cruzhacks-test-challenge-65ccc.cloudfunctions.net/'

    /**
     * We are using a Proxy because the API doesn't have the 'Access-Control-Allow-Origin'
     * header present. However, this should not be the case with the actual backend.
     */
    private static CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

    public static register(payload: []): boolean {


        // This part would be where we make an API call to store the information. The request
        // status would then be returned. Here we just assume the data is saved magically.

        localStorage.setItem('registered', 'true')

        return true;
    }

    /**
     *
     */
    public static isRegistered(): boolean {

        let registered = localStorage.getItem('registered')
        return registered != null && registered === 'true';
    }

    /**
     *
     */
    public static logout(): void {
        localStorage.setItem('registered', 'false')
    }

    public static getAnnouncements(callback: (announcements: null | string[]) => void) {

        fetch(this.CORS_PROXY + this.API_ENDPOINT + 'getDB')
            .then(response => response.json())
            .then(data => {

                callback(Object.values(data.results))

            })
            .catch((error) => {
                console.error(error)

                callback(null)
            })
    }
}

export default API;
