import React,{useEffect,useState} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const Murid = () => {
    const [murid, setUsers] = useState([]);

    useEffect(() => {
        getmurid();
    }, []);
  
    const getmurid = async () => {
      const response = await axios.get("http://localhost:5000/murid");
      setUsers(response.data);
    };
  
    const deletemurid = async (muridId) => {
      await axios.delete(`http://localhost:5000/murid/${muridId}`);
      getmurid();
    };

  return (
    <div>
         <Link to="/murid/add" className="button is-primary mb-2">
        Add New Santri
      </Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>NAME</th>
                    <th>NIS</th>
                    <th>JK</th>
                    <th>Alamat</th>
                    <th>STATUS P</th>
                    <th>STATUS K</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
            {murid.map((murid, index) => (
                <tr key={murid.id}>
                    <td>{index + 1}</td>
                    <td>{murid.name}</td>
                    <td>{murid.nis}</td>
                    <td>{murid.jk}</td>                   
                    <td>{murid.alamat}</td>
                    <td>pending</td>
                    <td>pending</td>
                    <td>
                    <Link
                  to={`/murid/edit/${murid.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletemurid(murid.id)}
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

export default Murid