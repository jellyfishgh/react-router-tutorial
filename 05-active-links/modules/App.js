import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render() {
        const activeStyle = {
            color: 'red'
        }
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li>
                        <Link to="/about" activeStyle={activeStyle}>About</Link>
                    </li>
                    <li>
                        <Link to="/repos" activeClassName='active'>Repos</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
