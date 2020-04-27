import React from 'react';
import '../scss/components/Container.scss'

export default class Container extends React.Component {

    public render() {

        let children = this.props.children;

        return (
            <div className="container">
                <div className="content">

                    {children}

                </div>
            </div>
        )
    }

}
