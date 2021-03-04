
import React from "react";
import axios from "axios";
import DeleteStudent from './DeleteStudent';
import AddStudent from './AddStudent';

class StudentList extends React.Component {
    state = { users: [] };

    componentDidMount() {
        this.getUsers();
    }

    handleAddStudent = () => {
        this.getUsers();
    };

    getUsers() {
        axios.get(`http://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users: users });
                console.log(res.data);
            });
    }

    render() {
        return (
            <div>
                <AddStudent onAddStudent={this.handleAddStudent} />
                <ul>{this.state.users.map(user =>
                    <li key={user.id}>
                        {user.name}
                        <DeleteStudent id={user.id} />
                    </li>
                )}</ul>
            </div>
        );
    }
}

export default StudentList;