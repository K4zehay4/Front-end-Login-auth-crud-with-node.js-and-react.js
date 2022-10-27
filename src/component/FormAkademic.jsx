import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const FormAkademic = () => {
  const [judul, setJudul] = useState("");
  const [gambar, setGambar] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const gambar = e.target.files[0];
    setGambar(gambar);
    setPreview(URL.createObjectURL(gambar));
  };

  const SaveGuru = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("gambar", gambar);
    formData.append("deskripsi", deskripsi);
    try {
      await axios.post("http://localhost:5000/akademic", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="content">
        <form onSubmit={ SaveGuru}>
          <div className="field">
            <label className="label">JUDUL</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Judul"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <div className="file">
                <label className="file-label">
                  <input
                    type="file"
                    className="file-input"
                    onChange={loadImage}
                  />
                  <span className="file-cta">
                    <span className="file-label">Choose a file...</span>
                  </span>
                </label>
              </div>
            </div>
          </div>

          {preview ? (
            <figure className="image is-128x128">
              <img src={preview} alt="img"/>
            </figure>
          ) : (
            ""
          )}

<div className="field">
            <label className="label">DESKRIPSI</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="deskripsi"
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

export default FormAkademic;
