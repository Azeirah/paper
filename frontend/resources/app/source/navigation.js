import React  from 'react';
import {Link} from 'react-router';

let Navigation = React.createClass({
    render() {
        return (
            <nav className="navigation">
                <Link to="/My channels">My channels</Link>
                <Link to="/Browse channels">Browse</Link>
            </nav>);
    }
});

module.exports = {
    Navigation,
};