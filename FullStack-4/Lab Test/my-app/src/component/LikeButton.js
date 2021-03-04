import { Component } from 'react';

class LikeButton extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0
        }
    }

    handleClick = (event) => {
        let likeCount = this.state.likes + 1;
        this.setState({ likes: likeCount });
    };
    render() {
        return (
            <span>
                <button onClick={this.handleClick}>Like</button>
                <label> {this.state.likes} Likes</label>
            </span>
        );
    }
}

export default LikeButton;