import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const Main = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>
                {React.cloneElement(this.props.children, _.omit(this.props, 'ref', 'key'))}
            </div>
        );
    }
});

export default Main;
