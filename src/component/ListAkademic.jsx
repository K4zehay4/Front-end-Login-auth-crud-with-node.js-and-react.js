import React,{useEffect,useState} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [akademic, setAkademic] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/akademic");
      setAkademic(response.data);
    };
  
    const deleteUser = async (akademicId) => {
      await axios.delete(`http://localhost:5000/akademic/${akademicId}`);
      getUsers();
    };
  return (
    <div>
       
        <Link to="/akademic/add" className="button is-primary mb-2">
        Add New Event
      </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Judul</th>
                    <th>Gambar</th>
                    <th>Deskripsi</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
            {akademic.map((akademic, index) => (
                <tr key={akademic.id}>
                    <td>{index + 1}</td>
                    <td>{akademic.judul}</td>
                    <td>{akademic.gambar}</td>
                    <td>{akademic.deskripsi}</td>
                    <td>
                    <Link
                  to={`/akademic/edit/${akademic.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(akademic.id)}
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