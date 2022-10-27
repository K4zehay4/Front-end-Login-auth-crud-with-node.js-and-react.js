import React,{useEffect} from 'react'
import Layout from './Layout'
import FormEditSantri from '../component/FormEditSantri';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from '../features/authSlice';

const EditMurid= () => {
  
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const { isError,user } = useSelector((state) => state.auth);

 useEffect(() => {
   dispatch(getMe());
 }, [dispatch]);

 useEffect(() => {
  if (isError) {
    navigate("/");
  }
  if (user && user.role !== "admin") {
    navigate("/dashboard");
  }
}, [isError, user, navigate]);
  return (
    <Layout>
        <FormEditSantri  />
    </Layout>
  )
}

export default EditMurid