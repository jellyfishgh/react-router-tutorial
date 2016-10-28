import React from 'react';
import fetch from './ajax';
import Comment from './Comment';

export default React.createClass({
    getInitialState() {
        return {
            comments: []
        };
    },
    componentDidMount() {
        fetch(this.props.url, '', 'GET', 2000, (json) => {
            this.setState({comments: json});
        }, (err) => {
            console.log(err.toString());
        });
    },
    render() {
        const userComments = this.state.comments.map((comment) => {
            return <Comment key={comment.name} username={comment.name} usercomment={comment.desc} />
        });
        return (
            <div>{userComments}</div>
        );
    }
})