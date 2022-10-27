import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSantri = () => {
  const [name, setName] = useState("");
  const [nis, setNis] = useState("");
  const [jk, setJk] = useState("");
  const [alamat, setAlamat] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSantri = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/murid", {
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
            <form onSubmit={saveSantri}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
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

export default FormAddSantri;