import React from 'react';
import '../scss/components/Container.scss'

export default class Container extends React.Component {

    public render() {

        return (
            <div className="container">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }

}
