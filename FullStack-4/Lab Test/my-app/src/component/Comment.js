import { Component } from 'react';
import Timer from './Timer';
import LikeButton from './LikeButton';

class Comment extends Component {
    render() { 
        return (  
            <div>
                <Timer />
                &nbsp;
                <strong>
                    {this.props.comment}
                </strong>
                &nbsp;
                <LikeButton />
            </div>
        );
    }
}
 
export default Comment;