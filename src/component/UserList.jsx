import React,{useEffect,useState} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/users");
      setUsers(response.data);
    };
  
    const deleteUser = async (userId) => {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      getUsers();
    };
  return (
    <div>
       
        <Link to="/users/add" className="button is-primary mb-2">
        Add New User
      </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>ROLE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                    <Link
                  to={`/users/edit/${user.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>                  
                
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default UserList