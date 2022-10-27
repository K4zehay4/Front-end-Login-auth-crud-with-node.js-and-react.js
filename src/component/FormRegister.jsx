import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister= () => {
    const [username,setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setconfPassword] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
  
    const saveUser = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/users", {
          username:username,
          password:password,
          email:email,
          confPassword:confPassword,
          role:role

        });
        navigate("/dashboard");
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
          <form onSubmit={saveUser}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Username</label>
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
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="username"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
              </div>
            </div>
          
        <div className="field">
              <label className="label">confirm password</label>
              <div className="control">
                <input
                  type="password"
                  className="input"
                  value={confPassword}
                  onChange={(e) => setconfPassword(e.target.value)}
                  placeholder="confirmasi password"
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
              <div className="control ">
                <button type="submit" className="button is-success is-fullwidth">
                  Save
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

export default FormRegister