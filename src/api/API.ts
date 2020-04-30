import {HackerInfo} from "./data/HackerInfo";

/**
 * All functions that require interfacing with the API
 *
 * All attributes and methods are static (can be accessed via `API.xxx`)
 * Instantiation is not required for now.
 */
class API {

    /**
     * CruzHacks HTTP EndPoint
     */
    private static API_ENDPOINT = 'https://us-central1-cruzhacks-test-challenge-65ccc.cloudfunctions.net/'

    /**
     * We are using a Proxy because the API doesn't have the 'Access-Control-Allow-Origin'
     * header present. However, this should not be the case with the actual backend.
     */
    private static CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/'

    /**
     * If the CORS Proxy doesn't work (because it doesn't periodically ?!), then we use our own proxy.
     */
    private static LOCAL_PROXY = 'https://cruzhacks-2021-frontend.wlgao.com/api/'

    /**
     * Register
     *
     * Returns the registration status.
     * @param payload a json string that contains registration information.
     */
    public static register(payload: HackerInfo): boolean {

        console.log('registering...')
        console.log(payload)

        // This part would be where we make an API call to store the information. The request
        // status would then be returned. Here we just assume the data is saved magically.

        localStorage.setItem('registered', 'true')
        localStorage.setItem('regInfo', JSON.stringify(payload))

        return true;
    }

    /**
     * Returns whether the user registered or not.
     */
    public static isRegistered(): boolean {

        let registered = localStorage.getItem('registered')
        return registered != null && registered === 'true';
    }

    /**
     * Logs out the current user.
     */
    public static logout(): void {
        localStorage.setItem('registered', 'false')
    }

    private static getFromUrl(callback: (announcements: null | string[]) => void, url: string, fallbackUrl: string | undefined = undefined) {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                callback(Object.values(data.results))
            })
            .catch((error) => {
                // console.error(error)

                if (fallbackUrl !== undefined) {
                    this.getFromUrl(callback, fallbackUrl);
                } else {
                    callback(null)
                }
            })
    }

    /**
     * Fetch all announcement for the current user.
     * Takes in a callback function when data are available. No return value should be expected.
     *
     * @param callback `announcements` is null when an error has occurred
     */
    public static getAnnouncements(callback: (announcements: null | string[]) => void) {

        this.getFromUrl(callback,
            // this.CORS_PROXY + this.API_ENDPOINT + 'getDB',
            this.LOCAL_PROXY + 'getDB')
    }
}

export default API;
