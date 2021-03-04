import { Component } from 'react';
import Comment from './Comment';

class TweetContainer extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            input: ""
        }
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let comments = this.state.comments;
        comments.push(this.state.input);
        this.setState({ 
            comments: comments 
        });

    };

    render() {
        const commentList = (
            <div>
                {this.state.comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        );
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3>{this.props.status}</h3>
                        <input type="text" name="comment1" onChange={this.handleChange} />
                        <button type="submit">Post</button>
                    </div>
                </form>
                <div>
                    {commentList}
                </div>
            </div>
        );
    }
}

export default TweetContainer;