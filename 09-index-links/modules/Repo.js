import React from 'react'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>{this.props.params.userName}</h1>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
})