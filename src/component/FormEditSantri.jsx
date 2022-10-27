import React,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditSantri = () => {
    const [name, setName] = useState("");
    const [nis, setNis] = useState("");
    const [jk, setJk] = useState("");
    const [alamat, setAlamat] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      const getMuridById = async () => {
        try {
          const response = await axios.get(
            `http://localhost:5000/murid/${id}`
          );
          setName(response.data.name);
          setNis(response.data.nis);
          setJk(response.data.jk);
          setAlamat(response.data.alamat);
        } catch (error) {
          if (error.response) {
            setMsg(error.response.data.msg);
          }
        }
      };
      getMuridById();
    }, [id]);
  
    const updateMurid= async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/murid/${id}`, {
          name: name,
          nis:nis,
          jk:jk,
          alamat:alamat
        });
        navigate("/murid");
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
          <form onSubmit={updateMurid}>
            <p className="has-text-centered">{msg}</p>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Nis</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={nis}
                  onChange={(e) => setNis(e.target.value)}
                  placeholder="Nis"
                />
              </div>
            </div>
            <div className="field">
          <label  className="label">Jk</label>     
          <div className="control">
              <div className="select is-fullwidth">
              <select value={jk} onChange={(e) => setJk(e.target.value)}>
                  <option value="Pria">Pria</option>
                  <option value="Wanita">Wanita</option>
              </select>
          </div>     
        </div>
        </div>

        <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Alamat"
                />
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
export default FormEditSantri