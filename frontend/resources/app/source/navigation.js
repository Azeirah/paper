import React  from 'react';
import {Link} from 'react-router';

let Navigation = React.createClass({
    render() {
        return (
            <nav className="navigation">
                <Link className="navigation-tab" to="/My channels">My channels</Link>
                <Link className="navigation-tab" to="/Browse channels">Browse</Link>
            </nav>);
    }
});

module.exports = {
    Navigation,
};