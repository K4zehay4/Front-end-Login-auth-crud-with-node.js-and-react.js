import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {


    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
    const getuserById = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/users/${id}`
          );
          setUsername(response.data.username);
          setEmail(response.data.email);
          setPassword(response.data.password);
          setconfPassword(response.data.confPassword);
          setRole(response.data.role);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getuserById();
    }, [id]);
  
    const updateUser= async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
            username:username,
            password:password,
            email:email,
            confPassword:confPassword,
            role:role
        });
        navigate("/users");
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
  return (
    <div>
      
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
          <form onSubmit={updateUser}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">USERNAME</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">EMAIL</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
              </div>
            </div>
          
        <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Alamat"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">confirm password</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  placeholder="Alamat"
                />
              </div>
            </div>

            <div className="field">
          <label  className="label">role</label>     
          <div className="control">
              <div className="select is-fullwidth">
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="admin">ADMIN</option>
                  <option value="user">USER</option>
              </select>
          </div>     
        </div>
        </div>


            <div className="field">
              <div className="control">
                <button type="submit" className="button is-success">
                  UPDATE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

export default FormEditUser