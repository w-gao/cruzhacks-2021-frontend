import React from 'react';
import './Container.scss'

export default class Container extends React.Component {

    public render() {

        let children = this.props.children;

        return (
            <div className="container">
                {children}
            </div>
        )
    }

}
