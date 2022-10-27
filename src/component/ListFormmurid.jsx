import React,{useEffect,useState} from 'react'
import axios from "axios";


function ListFormmurid() {

    const [akademic, setAkademic] = useState([]);

    useEffect(() => {
      getUsers();
    }, []);
  
    const getUsers = async () => {
      const response = await axios.get("http://localhost:5000/akademic");
      setAkademic(response.data);
    };
  
 

  return (
    <div>
         <div className="container mt-5">
      
      <div className="columns is-multiline mt-2">
        {akademic.map((Akademic) => (
          <div className="column is-one-quarter" key={Akademic.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img  src={Akademic.url}  alt="Image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{Akademic.judul}</p>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{Akademic.deskripsi}</p>
                  </div>
                </div>
              </div>
            


              <footer className="card-footer">
                
              </footer>
            </div>
          </div>
        ))}
      </div>
    </div>
  

    </div>
  )
}

export default ListFormmurid