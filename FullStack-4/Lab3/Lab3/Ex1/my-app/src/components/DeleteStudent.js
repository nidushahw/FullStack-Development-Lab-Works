import React from "react";
import axios from 'axios';


class DeleteStudent extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        axios.delete(`http://jsonplaceholder.typicode.com/users/${this.props.id}`)
            .then(res => {
                let id = res.data;
                console.log(res.data);
            });

    };
    render() {
        return (
            <div>
                 <button onClick={this.handleSubmit}>Delete</button>
            </div>
        );
    }
}
export default DeleteStudent;