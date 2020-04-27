import React from "react";
import API from "../api/API";
import '../scss/views/Announcements.scss';

interface IProps {
}

interface IState {
    loading: boolean
    announcements: null | object;
}

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
                <div className="announcementGroup">
                    <h3 className="announcementTitle">Loading...</h3>
                </div>
            )
        }

        if (this.state.announcements == null) {
            return (
                <div className="announcementGroup">
                    <h3 className="announcementTitle">Oh noes! An error occurred :(</h3>
                </div>
            )
        }

        const announcements: any = this.state.announcements;
        const items = []

        for (let i = 0; i < announcements.length; i++) {
            let announcement: any = announcements[i]
            items.push(
                <div key={i} className="announcementGroup slide-left">

                    <p className="announcementDate">
                        {announcement.time}
                    </p>

                    <h3 className="announcementTitle">
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
