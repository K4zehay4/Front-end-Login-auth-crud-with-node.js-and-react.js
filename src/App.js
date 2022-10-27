import {BrowserRouter, Routes,Route} from "react-router-dom";
import { lazy,Suspense } from "react";

const Login =lazy(()=>import("./component/Login"));
const Dashboard =lazy(()=>import("./pages/Dashboard"));
const Users =lazy(()=>import("./pages/Users"));
const Murid=lazy(()=>import("./pages/Murid"));
const AddUser=lazy(()=> import("./pages/AddUser"));
const EditUser =lazy(()=>import("./pages/EditUser"));
const AddSantri=lazy(()=>import("./pages/AddSantri"));
const EditMurid =lazy(()=>import("./pages/EditMurid"));
const Register =lazy(()=>import("./pages/Register"));
const Akademic =lazy(()=>import("./pages/Akademic"));
const Listakademic=lazy(()=>import("./pages/Listakademic"));
const ListformMurid=lazy(()=>import("./pages/ListformMurid"))


function App() {
  return (
    <div>
      <BrowserRouter> 
      <Suspense>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />   
        <Route path="/users" element={<Users/>} />  
        <Route path="/users/add" element={<AddUser/>} />   
        <Route path="/users/edit/:id" element={<EditUser/>} />   
        <Route path="/murid" element={<Murid/>} /> 
        <Route path="/murid/add" element={<AddSantri/>} /> 
        <Route path="/murid/edit/:id" element={<EditMurid/>} /> 
        <Route path="/akademic" element={<Listakademic/>} />
        <Route path="/akademic/add" element={<Akademic/>} />

        <Route path="/kalender" element={<ListformMurid/>} />

      </Routes>
      </Suspense>
      </BrowserRouter> 
      
      </div>
  );
}

export default App;
