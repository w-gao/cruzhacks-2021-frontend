import React from "react";
import API from "../api/API";
import '../views/Announcements.scss';

interface IProps {
}

interface IState {
    loading: boolean
    error: boolean;
    announcements: null | object;
}

export default class AnnouncementLoader extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            announcements: null
        };

        API.getAnnouncements((announcements: null | string[]) => {
            this.setState({loading: false, error: announcements == null, announcements: announcements})
        })
    }

    public render() {

        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        }

        if (this.state.error || this.state.announcements == null) {
            return (
                <div>Error</div>
            )
        }

        const announcements: any = this.state.announcements;
        const items = []

        for (let i = 0; i < announcements.length; i++) {
            let announcement: any = announcements[i]
            items.push(
                <div key={i} className="announcementGroup">

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
