import React from 'react'
import NavLink from './NavLink'
import {browserHistory} from 'react-router'

export default React.createClass({
    handleSubmit1(event) {
        event.preventDefault()
        const userName = encodeURIComponent(event.target.elements[0].value)
        const repo = encodeURIComponent(event.target.elements[1].value)
        const path = `/repos/${userName}/${repo}`
        browserHistory.push(path)
    },
    contextTypes: {
        router: React.PropTypes.object
    },
    handleSubmit2(event) {
        event.preventDefault()
        const userName = encodeURIComponent(event.target.elements[0].value)
        const repo = encodeURIComponent(event.target.elements[1].value)
        const path = `/repos/${userName}/${repo}`
        this.context.router.push(path)
    },
    render() {
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to='/repos/reactjs/react-router'>React Router</NavLink></li>
                    <li><NavLink to='/repos/facebook/react'>React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit2}>
                            <input type='text' placeholder='userName' /> / {' '}
                            <input type='text' placeholder='repo' />{' '}
                            <button type='submit'>Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})