import React from "react";
import API from "../api/API";
import '../scss/views/Announcements.scss';

interface IProps {
}

interface IState {
    loading: boolean
    announcements: null | object;
}

/**
 * AnnouncementLoader
 *
 * Fetches announcements from the API and display the data accordingly.
 */
export default class AnnouncementLoader extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: true,
            announcements: null
        };
    }

    public componentDidMount() {

        // fetch announcements
        API.getAnnouncements((announcements: null | string[]) => {
            this.setState({loading: false, announcements: announcements})
        })
    }

    public render() {

        if (this.state.loading) {
            return (
                <div className="announcement">
                    <h3 className="announcement-title">Loading...</h3>
                </div>
            )
        }

        if (this.state.announcements == null) {
            return (
                <div className="announcement">
                    <h3 className="announcement-title">Oh noes! An error occurred :(</h3>
                </div>
            )
        }

        const announcements: any = this.state.announcements;
        const items = []

        for (let i = 0; i < announcements.length; i++) {
            let announcement: any = announcements[i]
            items.push(
                <div key={i} className="announcement slide-left">

                    <p className="announcement-date">
                        {announcement.time}
                    </p>

                    <h3 className="announcement-title">
                        {announcement.text}
                    </h3>
                </div>
            )
        }

        return (
            <React.Fragment>
                {items}
            </React.Fragment>
        )

    }
}
