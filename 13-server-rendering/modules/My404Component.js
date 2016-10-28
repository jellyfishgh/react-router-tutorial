import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h2>Not Found</h2>
                <NavLink to='/'>Home</NavLink>
            </div>
        )
    }
})